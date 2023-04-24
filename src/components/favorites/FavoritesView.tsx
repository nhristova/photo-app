import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '@root/styles/shared.css';
import { AppState, Photo } from '@root/types';
import { getPhotos } from '@root/data';
import { PhotoCard } from '../shared/PhotoCard';
import { FavoritesEmpty } from './FavoritesEmpty';

export function FavoritesView() {
  const selectFavorites = (state: AppState) => state.photos.filter(el => state.favorites.includes(el.id));
  const favorites = useSelector(selectFavorites);
  
  return (
    <>
      <h2>Favorites</h2>
      <div className="photos-list">
        {favorites.length
          ? favorites.map(photo => <PhotoCard key={photo.id} photo={photo} />)
          : <FavoritesEmpty />
        }
      </div>
    </>
  )
}