import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const teachersSlice = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {
    setTeachers: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const teachersReducer = teachersSlice.reducer;
export const { setTeachers } = teachersSlice.actions;
export const selectTeachers = (state) => state.teachers.items;
