import { useSelector } from 'react-redux';
import { AppState } from '@root/types';
import '@root/styles/albums.css';
import { AlbumCard } from './AlbumCard';
import { useState } from 'react';
import { PaginationButtons } from '@root/components';

export function AlbumsListView() {
  const perPage = 8;
  const [page, setPage] = useState(1);
  const selectAlbums = (state: AppState) => state.albums.slice((page - 1) * perPage, page * perPage);
  const selectAlbumCount = (state: AppState) => Math.ceil(state.albums.length / perPage);
  const albums = useSelector(selectAlbums);
  const count = useSelector(selectAlbumCount);

  return (
    <>
      <h2>Albums</h2>
      <PaginationButtons count={count} setPage={setPage}/>
      <div className="albums-list">
        {albums.map((a) => <AlbumCard key={a.id} {...a} />)}
      </div>
    </>
  )
}
