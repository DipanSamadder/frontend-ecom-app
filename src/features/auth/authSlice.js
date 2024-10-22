import { createSlice } from "@reduxjs/toolkit";
import buildAsyncCases from "../../utils/buildAsyncCases";
import createThunk from "../../utils/createThunk";
import authService from "./authService";

const initialState = {
  data: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const login = createThunk("auth/login", authService.login);
export const register = createThunk("auth/register", authService.register);

const buildExtraReducers = (builder) => {
  buildAsyncCases(builder, login, "loginData");
  buildAsyncCases(builder, register, "registerData");
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetbrandState: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: buildExtraReducers,
});

export default authSlice.reducer;
