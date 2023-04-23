import App from './App';
import './index.css';
import { createHashRouter } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import { AlbumView } from './components/AlbumView';
import { AlbumsListView } from './components/AlbumsListView';
import { FavoritesView } from './components/FavoritesView';
import { PhotosListView } from './components/PhotosListView';

// Only works with createBrowserRouter
// const options = { basename: '/photo-app' };
const routes = [
  {
    path: '/',
    element: <App />,
    // Only works with createBrowserRouter
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <PhotosListView />
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
      },
    ]
  }, 
  {
    path: '/*',
    element: <ErrorPage />
  }
];

export const router = createHashRouter(routes);