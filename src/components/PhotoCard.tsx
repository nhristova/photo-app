import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../features/favoritesSlice';
import { Photo } from '../types/Photo';
import starYellow from '../assets/star-yellow.svg';
import starGray from '../assets/star-gray.svg';
import tempImg from '../assets/afc5c2.png';
import { useState } from 'react';
import { AppState } from '../types';

interface PhotoCardProps {
  photo: Photo;
}

export function PhotoCard({ photo }: PhotoCardProps) {
  const selectIsFavorite = (state: AppState) => state.favorites.includes(photo.id);
  const isFavorite = useSelector(selectIsFavorite);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const toggleFavorite = () => {
    isFavorite ? dispatch(remove(photo.id)) : dispatch(add(photo.id));
  };

  const imgLoaded = () => setLoading(false);

  return (
    <div className="photo-card">
      <img className="fav-icon" onClick={toggleFavorite}
        src={isFavorite ? starYellow : starGray}
        title={isFavorite ? "Remove from favorites" : "Add to favorites"}
        alt="Star favorites" />

      {/* Display a temp image while loading */}
      <img style={{ display: loading ? "block" : "none" }}
        src={tempImg}
        className="photo-img" alt="Temp image while loading" />
      <img style={{ display: loading ? "none" : "block" }}
        src={photo.thumbnailUrl}
        onLoad={imgLoaded}
        className="photo-img" alt="Image placeholder" />
        
      <div className="photo-title">{photo.title}</div>
    </div>
  )
}