import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Photo } from '../types/Photo';


const photosSlice = createSlice({
  name: 'photos',
  initialState: [] as Photo[],
  reducers: {
    storePhotos: (_, action: PayloadAction<Photo[]>) => {
      return action.payload;
    }
  }
});

export const { storePhotos } = photosSlice.actions;

export const photosReducer = photosSlice.reducer;