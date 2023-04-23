import App from './App';
import './index.css';
import { createHashRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import { AlbumView } from './components/AlbumView';
import { AlbumsListView } from './components/AlbumsListView';
import { FavoritesView } from './components/FavoritesView';

const options = { basename: '/photo-app' };
const routes = [
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
      },
      {
        path: 'favorites',
        element: <FavoritesView />
      }
    ]
  }
];

export const router = createHashRouter(routes)