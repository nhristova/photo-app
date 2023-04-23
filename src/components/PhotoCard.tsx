import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../features/favoritesSlice';
import { Photo } from '../types/Photo';
import starYellow from '../assets/star-yellow.svg';
import starGray from '../assets/star-gray.svg';
import truckLoading from '../assets/truck-loading.gif';
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
        
      {/* Display a temp gif while image is loading */}
      <img style={{ display: loading ? "block" : "none" }}
        src={truckLoading}
        className="photo-img" alt="Loading animation" />
      <img style={{ display: loading ? "none" : "block" }}
        src={photo.thumbnailUrl}
        onLoad={imgLoaded}
        className="photo-img" alt="Image placeholder" />
      <div>{photo.title}</div>
    </div>
  )
}