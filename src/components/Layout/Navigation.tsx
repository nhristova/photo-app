import { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';
import butterfly from '@root/assets/butterfly.svg';
import starRainbow from '@root/assets/star-rainbow.svg';
import circle from '@root/assets/circle.svg';
import hexagon from '@root/assets/hexagon.svg';

interface NavigationProps {
  toggleMenu: MouseEventHandler;
  openStyle: string;
}

export function Navigation({ toggleMenu, openStyle }: NavigationProps) {
  return (
    <>
      <nav id="nav-bar" className={`nav-bar ${openStyle}`}>
        <div className="nav-header">
          <div className="nav-hide" onClick={toggleMenu}>Hide</div>
          <div className="nav-brand">
            <img src={butterfly} className="nav-logo" alt="App logo butterfly" />
            Color Mosaic</div>
        </div>
        <NavLink to="/" className="nav-link" onClick={toggleMenu}>
          <img src={hexagon} className="nav-icon" />
          <span>Photos</span>
        </NavLink>
        <NavLink to="/albums" className="nav-link" onClick={toggleMenu}>
          <img src={circle} className="nav-icon" />
          <span>Albums</span>
        </NavLink>
        <NavLink to="/favorites" className="nav-link" onClick={toggleMenu}>
          <img src={starRainbow} className="nav-icon" />
          <span>Favorites</span>
        </NavLink>
      </nav>
      {openStyle === 'open' && <div className="clicker" onClick={toggleMenu}></div>}
    </>
  )
}