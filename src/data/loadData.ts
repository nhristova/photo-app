import { Photo } from '../types/Photo';
import photosLocal from './photos.json';

const photosUrl = 'https://jsonplaceholder.typicode.com/photos';

export const getPhotos = async (url: string = photosUrl): Promise<Photo[]> => {
  try {
    const r = await fetch(photosUrl);

    if (r.ok) {
      return r.json();
    } else {
      console.log(r);
    }

  } catch (error) {
    console.log(error);
  }
  // Use locally stored photos if fetch fails
  return Promise.resolve(photosLocal);
}
