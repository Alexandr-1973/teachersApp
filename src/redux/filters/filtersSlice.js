import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "English",
  level: "A1 Beginner",
  price: 30,
};

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload;
    },

    changeLevel: (state, action) => {
      state.level = action.payload;
    },

    changePrice: (state, action) => {
      state.price = action.payload;
    },
  },
});

export const { changeLanguage, changeLevel, changePrice } =
  filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;
export const filtersSelector = (state) => state.filters;
