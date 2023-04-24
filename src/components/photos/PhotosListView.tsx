import { useSelector } from 'react-redux';
import { AppState } from '@root/types';
import '@root/styles/photos.css';
import { useState } from 'react';
import { PaginationButtons, PhotoCard } from '@root/components';

export function PhotosListView() {
  const perPage = 27;
  const [page, setPage] = useState(1);
  const selectPhotos = (state: AppState) => state.photos.slice((page - 1) * perPage, page * perPage);
  const selectPhotosCount = (state: AppState) => Math.ceil(state.photos.length / perPage);
  const photos = useSelector(selectPhotos);
  const count = useSelector(selectPhotosCount);

  return (
    <>
      <h2>Photos</h2>
      <PaginationButtons count={10} setPage={setPage} />
      <div className="photos-list">
        {photos.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
      </div>
    </>
  )
}