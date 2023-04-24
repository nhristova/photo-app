import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import './styles/App.css';
import './styles/layout.css';
import { Header, Navigation } from './components';
import { getPhotos, transformPhotosToAlbums } from './data';
import { storePhotos, storeAlbums } from './features';

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
