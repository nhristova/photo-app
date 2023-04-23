import { AlbumCard } from '../components/AlbumCard';
import { AppState } from '../types';
import { useSelector } from 'react-redux';

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
