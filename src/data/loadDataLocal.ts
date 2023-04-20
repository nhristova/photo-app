import { Album } from '../types/Albums';
import { Photo } from '../types/Photo';
import photosLocal from './photos.json';

const transformToAlbumsById = (photos: Photo[]): { [id: string]: Photo[] } => {
  return photos.reduce((acc: any, p: Photo) => {
    let id = p.albumId;
    if (!acc[id]) {
      acc[id] = [];
    }

    acc[id].push(p);

    return acc;
  }, {});
}
export const loadData = (): Album[] => {
  let a = transformToAlbumsById(photosLocal);

  return Object.entries(a).map(([key, value]) => {
    return { id: key, photos: value } as Album;
  });

};

export const albumsById = transformToAlbumsById(photosLocal);

export const getAlbumById = (id: string = '1') => {
  return albumsById[id];
}
