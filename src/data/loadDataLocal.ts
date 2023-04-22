import { Album } from '../types/Album';
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
};
export const getAlbums = (): Album[] => {
  let a = transformToAlbumsById(photosLocal);

  return Object.entries(a).map(([id, photos]) => {
    return {
      id: id,
      photos: photos,
      count: photos.length,
      thumbnail: photos[0].thumbnailUrl
    } as Album;
  });

};

const albumsById = transformToAlbumsById(photosLocal);

export const getAlbumById = (id?: string) => {
  if (!id || !(id in albumsById)) {
    return [];
  }

  return albumsById[id];
};
