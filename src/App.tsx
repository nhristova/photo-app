import './App.css';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { getPhotos } from './data/loadData';
import { storePhotos } from './features/photosSlice';
import { storeAlbums } from './features/albumsSlice';
import { transformPhotosToAlbums } from './data/transformData';
import { useDispatch } from 'react-redux';

const openStyle = 'open';

function App() {
  const [open, setOpen] = useState(' ');
  const dispatch = useDispatch();

  useEffect(() => {
    getPhotos()
      .then(photos => {
        dispatch(storePhotos(photos));
        dispatch(storeAlbums(transformPhotosToAlbums(photos)))
      })
  }, []);

  const toggleMenu = () => {
    setOpen(prev => prev === openStyle ? ' ' : openStyle);
  }

  return (
    <div className='layout'>
      <Header toggleMenu={toggleMenu} />
      <Navigation toggleMenu={toggleMenu} openStyle={open} />

      <main className='main'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
