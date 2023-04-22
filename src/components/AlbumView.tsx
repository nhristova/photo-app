import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAlbumById } from '../data/loadDataLocal';
import { Album } from '../types/Album';
import { PhotoCard } from './PhotoCard';
import { Photo } from '../types/Photo';

export function AlbumView() {
  const { id } = useParams();
  const [photos, setPhotos] = useState([] as Photo[]);

  useEffect(() => {
    setPhotos(getAlbumById(id));
  }, [id]);

  return (
    <>
      <h2>🌄 Album {id}</h2>
      <div className="photos-list">
        {
          photos.slice(0, 7).map(p => <PhotoCard key={p.id} photo={p} />)
        }
      </div>
    </>
  )
}