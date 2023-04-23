import { Album } from './Album';
import { Photo } from './Photo';

export interface AppState {
  favorites: number[],
  photos: Photo[],
  albums: Album[],
}