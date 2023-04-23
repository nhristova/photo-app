import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer, persistStore,
  FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { favoritesReducer } from '../features/favoritesSlice';
import { photosReducer } from '../features/photosSlice';
import { albumsReducer } from '../features/albumsSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites']
};

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  photos: photosReducer,
  albums: albumsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);