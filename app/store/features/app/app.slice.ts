"use client";

import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/api.slice";
import { saveToLocalStorage, loadFromLocalStorage } from "@/app/helpers/utilis";
import { User, Event } from "@/types/app.interface";

const EVENT_URL = "/events";
const AUTH_URL = "/auth";

const initialState = {
  dashboardInfo:
    typeof window !== "undefined"
      ? (loadFromLocalStorage("uniconDashboardInfo", null) as User | null)
      : null,
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    /**
     * @see Save data reducers, basically updates the state and saves data to local storage.
     *
     */

    saveDashboardInfo: (state, action) => {
      state.dashboardInfo = action.payload;
      saveToLocalStorage("uniconDashboardInfo", JSON.stringify(action.payload));
    },

    /**
     * @see clear data reducers, basically resets the state and removes data from local storage.
     *
     */

    // Resets the entire app state to the initial state, used when user logs out
    resetApp: (state, action) => {
      localStorage.removeItem("uniconDashboardInfo");
    },
  },
});

export const appApiCall = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    /**
     * @summary Auth endpoints
     */

    login: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/login`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["User"],
    }),

    logout: builder.mutation({
      query: () => ({
        url: `${AUTH_URL}/logout`,
        method: "POST",
      }),
      invalidatesTags: ["User"],
    }),

    forgotPassword: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/forgot-password`,
        method: "POST",
        data,
      }),
    }),

    resetPassword: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/reset-password`,
        method: "POST",
        data,
      }),
    }),

    /**
     * @summary User endpoints
     */

    createUser: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/signup`,
        method: "POST",
        data,
      }),
    }),

    updateUser: builder.mutation({
      query: (data) => ({
        url: `${AUTH_URL}/update`,
        method: "PUT",
        data,
      }),

      invalidatesTags: ["User"],
    }),

    /**
     * @summary Event endpoints
     */

    createEvent: builder.mutation({
      query: (data) => ({
        url: `${EVENT_URL}/`,
        method: "POST",
        data,
      }),

      invalidatesTags: ["User"],
    }),

    registerEvent: builder.mutation({
      query: (data) => ({
        url: `${EVENT_URL}/register`,
        method: "POST",
        data,
      }),
      invalidatesTags: ["User"],
    }),

    getAllEvents: builder.query({
      query: (data) => ({
        url: `${EVENT_URL}`,
        method: "GET",
      }),

      providesTags: ["User"],
    }),

    getEventById: builder.query({
      query: (data) => ({
        url: `${EVENT_URL}`,
        method: "GET",
        params: {
          data,
        },
      }),
      providesTags: ["User"],
    }),

    deleteEvent: builder.mutation({
      query: (data) => ({
        url: EVENT_URL,
        method: "DELETE",
        params: {
          data,
        },
      }),
      invalidatesTags: ["User"],
    }),

    getEventsByFilter: builder.query({
      query: (data) => ({
        url: EVENT_URL,
        method: "GET",
        params: {
          data,
        },
      }),
    }),
  }),
});
