import './App.css';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';

const openStyle = 'open';

function App() {
  const [open, setOpen] = useState(' ');

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
