import { useEffect, useState } from 'react';
import './App.css';
import { loadData } from './data/loadDataLocal';
import { AlbumCard } from './components/AlbumCard';
import { AlbumView } from './components/AlbumView';

function App() {
  const [albums, setAlbums] = useState(loadData());



  return (
    <div className="App">
      <h1>Photo App 😎</h1>
      {albums.slice(0,3).map((a) => <AlbumCard key={a.id} albumName={a.id} />)}

      <AlbumView album={albums[0]}/>
    </div>
  )
}

export default App
