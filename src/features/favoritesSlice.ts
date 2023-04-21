import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    add: (state) => {},
    remove: (state) => {}
  }
})

export default favoritesSlice.reducer;