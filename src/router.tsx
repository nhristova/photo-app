import App from './App';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import { AlbumView } from './components/AlbumView';
import { AlbumsListView } from './components/AlbumsListView';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AlbumsListView />
      },
      {
        path: 'albums',
        element: <AlbumsListView />
      },
      {
        path: 'albums/:id',
        element: <AlbumView />
      }
    ]
  }
])