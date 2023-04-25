import { MouseEventHandler } from 'react';
import menu from '@root/assets/menu.svg';
import butterfly from '@root/assets/butterfly.svg';

interface HeaderProps {
  toggleMenu: MouseEventHandler;
}

export function Header({ toggleMenu }: HeaderProps) {
  return (
    <header className='header'>
      <img src={menu} className="hamburger-icon" alt="Open menu" onClick={toggleMenu} />
      <img src={butterfly} className="logo" alt="App logo butterfly" />
      <h1>Color Mosaic</h1>
    </header>
  )
};
