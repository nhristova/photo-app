import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Link to='/'>🏠 Home </Link>
      <Link to='/albums'>🖼 Albums</Link>
      <Link to='/favorites'>♥ Favorites</Link>
      <h1>Photo App 😎</h1>
      <Outlet />
    </div>
  )
}

export default App
