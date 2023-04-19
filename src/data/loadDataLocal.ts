import { Albums } from '../types/Albums';
import photosLocal from './photos.json';

export const loadData = (): Albums => {

  return photosLocal.reduce((acc, p) => {
    if (!acc[p.albumId]) {
      acc[p.albumId] = [];
    }

    acc[p.albumId].push(p);

    return acc;
  }, {} as Albums);

}