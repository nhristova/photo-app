import { useEffect, useState } from 'react';
import './App.css';
import { loadData } from './data/loadDataLocal';
import { Album } from './components/Album';

function App() {
  const [albums, setAlbums] = useState(loadData());



  return (
    <div className="App">
      {Object.entries(albums).map(([key,value]) => <Album key={key} albumName={key} />)}
    </div>
  )
}

export default App
