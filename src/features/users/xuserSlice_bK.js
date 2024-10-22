import { createSlice } from "@reduxjs/toolkit";
import createThunk from "../../utils/apiService";
import buildAsyncCases from "../../utils/buildAsyncCases ";
import userService from "./userService";

const initialState = {
  user: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getBrands = createThunk("admin/brands", userService.getBrands);
export const getABrand = createThunk("admin/get-brand", userService.getABrand);
export const addBrand = createThunk("admin/add-brand", userService.addBrand);
export const updateBrand = createThunk(
  "admin/update-brand",
  userService.updateBrand
);
export const deleteBrand = createThunk(
  "admin/delete-brand",
  userService.deleteBrand
);

// Helper function to build extra reducers
const buildExtraReducers = (builder) => {
  // Apply the common addCase handling for each thunk
  buildAsyncCases(builder, getBrands, "brands");
  buildAsyncCases(builder, getABrand, "editData");
  buildAsyncCases(builder, addBrand, "createBrandData");
  buildAsyncCases(builder, updateBrand, "updatedData");
  buildAsyncCases(builder, deleteBrand, "deleteBrandData");
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
