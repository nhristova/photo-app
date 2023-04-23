import './App.css';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';

const openClass = 'open';

function App() {
  const [open, setOpen] = useState(' ');

  const toggleMenu = () => {
    setOpen(prev => prev === openClass ? ' ' : openClass);
  }

  return (
    <div className='layout'>
      <Header toggleMenu={toggleMenu}/>
      <Navigation toggleMenu={toggleMenu}/>

      <main className='main'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
