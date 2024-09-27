import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const favoriteSlice = createSlice({
  name: "items",
  initialState: initialState,
});

export const favoriteReducer = favoriteSlice.reducer;
