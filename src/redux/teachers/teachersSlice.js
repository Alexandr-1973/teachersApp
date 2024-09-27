import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchTeachers } from "./teachersOperations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const teachersSlice = createSlice({
  name: "items",
  initialState: initialState,
  extraReducers: (builder) => {
    builder;

    //   .addCase(fetchTeachers.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(fetchTeachers.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     state.items = action.payload;
    //   })
    //   .addCase(fetchTeachers.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload;
    //   });
  },
});

export const teachersReducer = teachersSlice.reducer;
