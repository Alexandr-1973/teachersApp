import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const favoriteSlice = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {
    clickFavorite: (state, action) => {
      if (state.items.length === 0) {
        state.items = [...state.items, action.payload];
      } else {
        const isFavorite = state.items.some(
          (item) => item.avatar_url === action.payload.avatar_url
        );

        if (isFavorite) {
          state.items = state.items.filter(
            (item) => item.avatar_url !== action.payload.avatar_url
          );
        } else {
          state.items = [...state.items, action.payload];
        }
      }
    },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { clickFavorite } = favoriteSlice.actions;
export const selectFavorite = (state) => state.favorite.items;
