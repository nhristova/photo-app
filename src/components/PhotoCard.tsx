import { useSelector, useDispatch } from 'react-redux';
import { add, remove, AppState } from '../features/favoritesSlice';
import { Photo } from '../types/Photo';
import starYellow from '../assets/star-yellow.svg';
import starGray from '../assets/star-gray.svg';
import truckLoading from '../assets/truck-loading.gif';
import { useEffect, useState } from 'react';

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
      <div className="fav-icon" onClick={toggleFavorite}>
        {
          isFavorite ?
            <img src={starYellow} alt="Yellow star, image is in favorites" /> :
            <img src={starGray} alt="Gray star, image is not in favorites" />
        }
      </div>
      <div style={{ display: loading ? "block" : "none" }}>
        <img src={truckLoading} />
      </div>
      <div style={{ display: loading ? "none" : "block" }}>
        <img src={photo.thumbnailUrl} onLoad={imgLoaded} className="photo-img" alt="Image placeholder" />
      </div>
      <div>{photo.title}</div>
    </div>
  )
}