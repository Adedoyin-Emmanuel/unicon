"use client";

import axios from "axios";

export const apiBaseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  "https://unicorn-22up.onrender.com/api/v1";

const Axios = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
});

const refreshAccessToken = async () => {
  try {
    const response = await Axios.post("/auth/refresh-token");

    if (response) {
      console.log("Request to refresh token endpoint successful");
    }
  } catch (error) {
    console.log(error);
  }
};

//Interceptors for token expiration
Axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Request intercepted due to 401 error:", error.config);
      if (
        error.response.data.message.includes("invalid token") ||
        error.response.data.message.includes("Invalid auth token") ||
        error.response.data.message.includes("no refresh token")
      ) {
        console.log(error.response.data.message);
        //just in case the client still routes the user to a protected route, we've to route them back
        if (typeof window !== "undefined") {
          window.location.href = "/auth/login";
        }
        return;
      } else {
        await refreshAccessToken();
      }

      return Axios(error.config);
    }

    return Promise.reject(error);
  }
);

export default Axios;
