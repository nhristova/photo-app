import { createSlice } from "@reduxjs/toolkit";

export interface AppState {
  favorites: number[],
}

const initialState: number[] = [3];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state, action) => {
      return [...state, action.payload]
    },
    remove: (state, action) => {
      return state.filter(id => id !== action.payload)
    }
  }
});

export const { add, remove } = favoritesSlice.actions;
export const selectFavorites = (state: number[]) => state;

export default favoritesSlice.reducer;