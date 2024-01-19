"use client";

import { createSlice } from "@reduxjs/toolkit";
import { apiSlice } from "../api/api.slice";
import { saveToLocalStorage, loadFromLocalStorage } from "@/app/helpers/utilis";
import { User, Event } from "@/types/app.interface";


const EVENT_URL = "/event";
const AUTH_URL = "/auth";