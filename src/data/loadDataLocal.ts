import { Album } from '../types/Albums';
import { Photo } from '../types/Photo';
import photosLocal from './photos.json';

export const loadData = (): Album[] => {
  // TODO: Return an array of Albums {id, photos}

  let a = photosLocal.reduce((acc: any, p: Photo) => {
    let id = p.albumId;
    if (!acc[id]) {
      acc[id] = [];
    }

    acc[id].push(p);

    return acc;
  }, {});

  return Object.entries(a).map(([key, value]) => {
    return { id: key, photos: value } as Album;
  });

}