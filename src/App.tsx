import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <div className='layout'>
      <header className='header'>
        <h1>Photos</h1>
      </header>      
      <nav className='nav-bar'>
        <Link to='/' className='nav-link'>🏠 Home </Link>
        <Link to='/albums' className='nav-link'>🖼 Albums</Link>
        <Link to='/favorites' className='nav-link'>♥ Favorites</Link>
      </nav>
      <main className='main'>
      <Outlet />
      </main>
    </div>
  )
}

export default App
