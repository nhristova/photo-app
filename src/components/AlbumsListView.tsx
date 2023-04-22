import { useEffect, useState } from 'react';
import { getAlbums } from '../data/loadDataLocal';
import { AlbumCard } from '../components/AlbumCard';
import { Album } from '../types/Album';

export function AlbumsListView() {
  const [albums, setAlbums] = useState(getAlbums());

  return (
    <>
      <h2>🌅 Albums</h2>
      <div className="albums-list">
        {albums.slice(0, 7).map((a) => <AlbumCard key={a.id} {...a} />)}
      </div>
    </>
  )
}
