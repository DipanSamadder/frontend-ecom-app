import { createSlice } from "@reduxjs/toolkit";
import buildAsyncCases from "../../utils/buildAsyncCases ";
import createThunk from "../../utils/createThunk";
import userService from "./userService";

const initialState = {
  data: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getCustomer = createThunk("customer", userService.customer);

const buildExtraReducers = (builder) => {
  buildAsyncCases(builder, getCustomer, "data");
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetbrandState: (state) => {
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
      state.createBrandData = null;
      state.updatedData = null;
      state.deleteBrandData = null;
      state.editData = null;
    },
  },
  extraReducers: buildExtraReducers,
});

export default userSlice.reducer;
