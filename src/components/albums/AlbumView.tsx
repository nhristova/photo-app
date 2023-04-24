import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '@root/styles/albums.css';
import { AppState, Photo } from '@root/types';
import arrowBack from '@root/assets/arrow-back.svg';
import { PhotoCard } from '../shared/PhotoCard';
import { PaginationButtons } from '../shared/PaginationButtons';
import { useState } from 'react';

export function AlbumView() {
  const perPage = 17;
  const [page, setPage] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const selectAlbum = (state: AppState) => {
    const found = state.albums.find(album => album.id === id);

    if (found) {
      const pageCount = Math.ceil(found.photos.length / perPage)
      const photos = found.photos.slice((page - 1) * perPage, page * perPage);

      return { photos, pageCount }
    }

    return { photos: [] as Photo[], pageCount: 0 };
  };
  const {photos, pageCount} = useSelector(selectAlbum);


  return (
    <>
      <div className="album-title">
        <img src={arrowBack} className="back-icon"
          onClick={() => navigate(-1)} alt="Go back"
          title="Back" />
        <h2>🌄 Album {id}</h2>
      </div>
      <PaginationButtons count={pageCount} setPage={setPage}/>
      <div className="photos-list">
        {
          photos.map(p => <PhotoCard key={p.id} photo={p} />)
        }
      </div>
    </>
  )
}