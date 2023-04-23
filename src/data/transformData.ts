import { Album } from '../types/Album';
import { Photo } from '../types/Photo';

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

export const transformPhotosToAlbums = (photos: Photo[]): Album[] => {
  let a = transformToAlbumsById(photos);

  return Object.entries(a).map(([id, photos]) => {
    return {
      id: id,
      photos: photos,
      count: photos.length,
      thumbnail: photos[0].thumbnailUrl
    } as Album;
  });

};
