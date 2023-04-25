import { transformPhotosToAlbums } from '@root/data';
import { Album, Photo } from '@root/types';
import { describe, it, expect } from 'vitest';

describe('transformPhotosToAlbums', () => {
  it('should return a Album[], when passed valid data', () => {
    const mockPhotos: Photo[] = [{
      albumId: 1,
      id: 1,
      title: "title",
      url: "456",
      thumbnailUrl: "123"
    }];

    const expected: Album[] = [{
      id: "1",
      photos: mockPhotos,
      count: 1,
      thumbnail: '123',
    }];

    const uat = transformPhotosToAlbums(mockPhotos)
    expect(uat).toEqual(expected);
  });

  it('should return an empty array, when passed empty data', () => {
    const uat = transformPhotosToAlbums([])
    expect(uat).toEqual([]);
  });
});