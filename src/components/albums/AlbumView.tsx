import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '@root/styles/Albums.css';
import { AppState, Photo } from '@root/types';
import arrowBack from '@root/assets/arrow-back.svg';
import { PhotoCard } from '../shared/PhotoCard';

export function AlbumView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const selectAlbum = (state: AppState) => state.albums.find(album => album.id === id)?.photos ?? [] as Photo[];
  const photos = useSelector(selectAlbum);

  return (
    <>
      <div>
        <img src={arrowBack} className="back-icon"
          onClick={() => navigate(-1)} alt="Go back"
          title="Back" />
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