import { createHashRouter } from 'react-router-dom';
import App from '../App';
import {
  AlbumView,
  AlbumsListView,
  ErrorPage,
  FavoritesView, PhotosListView
} from '../components';

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