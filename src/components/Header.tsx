import menu from '../assets/menu.svg';
import butterfly from '../assets/butterfly.svg';
import { MouseEventHandler } from 'react';

interface HeaderProps {
  toggleMenu: MouseEventHandler;
}

export function Header({ toggleMenu }: HeaderProps) {
  return (
    <header className='header'>
      <img src={menu} className="hamburger-icon" alt="Open menu" onClick={toggleMenu} />
      <img src={butterfly} className="logo" alt="App logo butterfly" />
      <h1>Photos</h1>
    </header>
  )
};
