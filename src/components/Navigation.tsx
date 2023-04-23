import { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';
import butterfly from '../assets/butterfly.svg';

interface NavigationProps {
  toggleMenu: MouseEventHandler;
  openStyle: string;
}

export function Navigation({ toggleMenu, openStyle }: NavigationProps) {
  return (
    <nav id="nav-bar" className={`nav-bar ${openStyle}`}>
      <div className="menu-header">
        <div className="menu-top" onClick={toggleMenu}>Hide</div>
        <img src={butterfly} className="menu-logo" alt="App logo butterfly" />
        <div>Photos</div>
      </div>
      <NavLink to='/' className='nav-link' onClick={toggleMenu}>⛺ Photos </NavLink>
      <NavLink to='/albums' className='nav-link' onClick={toggleMenu}>🌅 Albums</NavLink>
      <NavLink to='/favorites' className='nav-link' onClick={toggleMenu}>💛 Favorites</NavLink>
    </nav>
  )
}