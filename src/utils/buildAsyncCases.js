const buildAsyncCases = (builder, thunk, stateKey) => {
  builder
    .addCase(thunk.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    })
    .addCase(thunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state[stateKey] = action.payload?.data;
      state.message = action.payload?.message || "Success";
    })
    .addCase(thunk.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;

      // Logging to check the payload
      console.log("Error in thunk rejected case:", action.payload);

      // Display error message
      state.message = action.payload?.message || "Error occurred";
    });
};

export default buildAsyncCases;
