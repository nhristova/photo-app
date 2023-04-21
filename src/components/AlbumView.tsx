import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAlbumById } from '../data/loadDataLocal';
import { Album } from '../types/Albums';
import { PhotoCard } from './PhotoCard';
import { Photo } from '../types/Photo';

interface AlbumViewProps {
  album: Album;
}

export function AlbumView() {
  const { id } = useParams();
  const [photos, setPhotos] = useState([] as Photo[]);

  useEffect(() => {
    setPhotos(getAlbumById(id));
  }, [id]);

  return (
    <>
      <h2>🌄 {id}</h2>
      <div className="photos-list">
        {
          photos.slice(0, 3).map(p => <PhotoCard key={p.id} photo={p} />)
        }
      </div>
    </>
  )
}