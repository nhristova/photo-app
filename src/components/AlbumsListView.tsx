import { useEffect, useState } from 'react';
import { loadData } from '../data/loadDataLocal';
import { AlbumCard } from '../components/AlbumCard';
import { Album } from '../types/Albums';

export function AlbumsListView() {
  const [albums, setAlbums] = useState(loadData());

  return (
    <>
      {albums.slice(0, 3).map((a) => <AlbumCard key={a.id} albumName={a.id} />)}
    </>
  )
}
