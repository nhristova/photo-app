import { useNavigate, useParams } from 'react-router-dom';
import { PhotoCard } from './PhotoCard';
import { Photo } from '../types/Photo';
import { AppState } from '../types';
import { useSelector } from 'react-redux';
import arrowBack from '../assets/arrow-back.svg';

export function AlbumView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectAlbum = (state: AppState) => state.albums.find(album => album.id === id)?.photos ?? [] as Photo[];
  const photos = useSelector(selectAlbum);

  return (
    <>
      <div>
        <img src={arrowBack} className="back-icon" onClick={() => navigate(-1)} alt="Go back" />
      </div>
      <h2>🌄 Album {id}</h2>
      <div className="photos-list">
        {
          photos.map(p => <PhotoCard key={p.id} photo={p} />)
        }
      </div>
    </>
  )
}