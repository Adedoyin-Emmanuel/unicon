"use client";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
import { User } from "@/types/app.interface";

const userInfoFromLocalStorage =
  typeof window !== "undefined"
    ? localStorage.getItem("uniconUserInfo")
    : null;

const initialState = {
  userAuthInfo: userInfoFromLocalStorage
    ? (JSON.parse(userInfoFromLocalStorage) as User)
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.userAuthInfo = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("uniconUserInfo", JSON.stringify(action.payload));
      }
    },

    /**
     * @summary The updateAuthInfo is a special reducer that changes the data
     * saved when the user logs in, when the user updates their profile
     * So they wouldn't have to log out before they see their updated details.
     *
     */

    updateAuthInfo: (state, action) => {
      state.userAuthInfo = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("uniconUserInfo", JSON.stringify(action.payload));
      }
    },

    logoutUser: (state, action) => {
      if (typeof window !== "undefined") {
        localStorage.removeItem("uniconUserInfo");

        axios
          .post("/api/auth/reset-token")
          .then((response) => {
            //console.log(response);
          })
          .catch((error) => {
            console.error("Error logging out user:", error);
            toast.error("An error occured while logging out");
          });

        return state;
      }

      return state;
    },
  },
});

export const { loginUser, updateAuthInfo, logoutUser } = authSlice.actions;
export default authSlice.reducer;
