import './App.css';
import { NavLink, Outlet } from 'react-router-dom';
import menu from './assets/menu.svg';
import butterfly from './assets/butterfly.svg';
import { useState } from 'react';

const openClass = 'open';

function App() {
  const [open, setOpen] = useState(' ');

  const toggleMenu = () => {
    setOpen(prev => prev === openClass ? ' ' : openClass);
  }

  return (
    <div className='layout'>
      <header className='header'>
        <img src={menu} className="hamburger-icon" alt="Open menu" onClick={toggleMenu} />
        <img src={butterfly} className="logo" alt="App logo butterfly" />
        <h1>Photos</h1>
      </header>

      <nav id="nav-bar" className={`nav-bar ${open}`}>
        <div className="menu-header">
          <div className="menu-top" onClick={toggleMenu}>Hide</div>
          <img src={butterfly} className="menu-logo" alt="App logo butterfly" />
          <div>Photos</div>
        </div>
        <NavLink to='/' className='nav-link' onClick={toggleMenu}>🏠 Home </NavLink>
        <NavLink to='/albums' className='nav-link' onClick={toggleMenu}>🌅 Albums</NavLink>
        <NavLink to='/favorites' className='nav-link' onClick={toggleMenu}>💛 Favorites</NavLink>
      </nav>

      <main className='main'>
        <Outlet />
      </main>
    </div>
  )
}

export default App
