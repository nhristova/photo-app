import { PhotoCard } from './PhotoCard';
import { AppState } from '../types';
import { useSelector } from 'react-redux';

export function PhotosListView() {
  const selectPhotos = (state: AppState) => state.photos;
  const photos = useSelector(selectPhotos);

  return (
    <>
      <h2>Photos</h2>
      <div className="photos-list">
        {photos.slice(0, 20).map(photo => <PhotoCard key={photo.id} photo={photo} />)}
      </div>
    </>
  )
}