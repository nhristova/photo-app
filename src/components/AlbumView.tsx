import { useParams } from 'react-router-dom';
import { PhotoCard } from './PhotoCard';
import { Photo } from '../types/Photo';
import { AppState } from '../types';
import { useSelector } from 'react-redux';

export function AlbumView() {
  const { id } = useParams();
  const selectAlbum = (state: AppState) => state.albums.find(album => album.id === id)?.photos ?? [] as Photo[];
  const photos = useSelector(selectAlbum);

  return (
    <>
      <h2>🌄 Album {id}</h2>
      <div className="photos-list">
        {
          photos.map(p => <PhotoCard key={p.id} photo={p} />)
        }
      </div>
    </>
  )
}