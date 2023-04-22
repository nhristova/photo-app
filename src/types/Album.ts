import { Photo } from "./Photo";

export interface Album {

  id: string; 
  photos: Photo[];
  count: number;
  thumbnail: string;
}