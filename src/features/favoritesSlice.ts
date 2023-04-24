import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [] as number[],
  reducers: {
    add: (state, action: PayloadAction<number>) => {
      return [...state, action.payload]
    },
    remove: (state, action: PayloadAction<number>) => {
      return state.filter(id => id !== action.payload)
    }
  }
});

export const { add, remove } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;