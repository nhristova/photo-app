import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  favorites: number[],
}

const initialState: AppState = {
  favorites: [3],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    },
    remove: (state, action) => {
      return {
        ...state,
        favorites: state.favorites.filter(id => id !== action.payload)
      }
    }
  }
});

export const { add, remove } = favoritesSlice.actions;
export const selectFavorites = (state: AppState) => state.favorites;

export default favoritesSlice.reducer;