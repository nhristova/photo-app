import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Album } from '../types';


const albumsSlice = createSlice({
  name: 'albums',
  initialState: [] as Album[],
  reducers: {
    storeAlbums: (_, action: PayloadAction<Album[]>) => {
      return action.payload;
    }
  }
});

export const { storeAlbums } = albumsSlice.actions;

export const albumsReducer = albumsSlice.reducer;