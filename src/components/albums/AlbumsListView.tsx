import { useSelector } from 'react-redux';
import { AppState } from '@root/types';
import '@root/styles/Albums.css';
import { AlbumCard } from './AlbumCard';

export function AlbumsListView() {
  const selectAlbums = (state: AppState) => state.albums;
  const albums = useSelector(selectAlbums);

  return (
    <>
      <h2>Albums</h2>
      <div className="albums-list">
        {albums.map((a) => <AlbumCard key={a.id} {...a} />)}
      </div>
    </>
  )
}
