import { createAsyncThunk } from "@reduxjs/toolkit";

// Common async thunk creator
const createThunk = (type, apiFunction) => {
  return createAsyncThunk(type, async (payload, thunkApi) => {
    try {
      const response = await apiFunction(payload);
      return response;
    } catch (error) {
      const serializableError = {
        message: error.response?.data?.message || error.message,
        status: error.response?.status,
      };
      return thunkApi.rejectWithValue(serializableError);
    }
  });
};

export default createThunk;
