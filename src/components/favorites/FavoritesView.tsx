import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '@root/styles/shared.css';
import { AppState, Photo } from '@root/types';
import { getPhotos } from '@root/data';
import { PhotoCard } from '../shared/PhotoCard';
import { FavoritesEmpty } from './FavoritesEmpty';

export function FavoritesView() {
  const selectFavorites = (state: AppState) => state.favorites;
  const favorites = useSelector(selectFavorites);
  const [favs, setFavs] = useState([] as Photo[])

  // TODO rework, do not call get photos
  useEffect(() => {
    getPhotos()
      .then(data => {
        const favs = data.filter(el => favorites.includes(el.id));
        setFavs(favs);
      })
  }, [favorites]);

  return (
    <>
      <h2>Favorites</h2>
      <div className="photos-list">
        {favs.length
          ? favs.map(photo => <PhotoCard key={photo.id} photo={photo} />)
          : <FavoritesEmpty />
        }
      </div>
    </>
  )
}