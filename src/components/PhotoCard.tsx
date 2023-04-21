import { useSelector, useDispatch } from 'react-redux';
import { add, remove, AppState } from '../features/favoritesSlice';
import { Photo } from "../types/Photo";

interface PhotoCardProps {
  photo: Photo;
}

export function PhotoCard({ photo }: PhotoCardProps) {
  const selectIsFavorite = (state: AppState) => state.favorites.includes(photo.id);
  const isFavorite = useSelector(selectIsFavorite);
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    isFavorite ? dispatch(remove(photo.id)) : dispatch(add(photo.id));
  }

  return (
    <div className="photo-card">
      <div className="fav-icon" onClick={toggleFavorite}>{isFavorite ? '💚' : '🤍'}</div>
      <img src={photo.thumbnailUrl} />
      <div>{photo.title}</div>
    </div>
  )
}