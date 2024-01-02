import apiClient from "@/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISignIn, IUser } from "./interfaces";
import { IResponse } from "@/interfaces";
import { setUser } from "./userSlice";

export const signIn = createAsyncThunk(
  "signIn",
  async (payload: ISignIn, { rejectWithValue }) => {
    const response: IResponse = await apiClient({
      method: "post",
      url: "/auth/sign-in",
      data: payload,
    });

    if (response.error) {
      rejectWithValue(response.error);
      return;
    }

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
    }
  }
);

export const getMe = createAsyncThunk(
  "users/get-me",
  async (_, { dispatch }) => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const response: IResponse = await apiClient({
      method: "get",
      url: "/auth/me",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(setUser(response.data as IUser));
  }
);
