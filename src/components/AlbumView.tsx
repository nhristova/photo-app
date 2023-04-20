import { Album } from "../types/Albums";
import { PhotoCard } from "./PhotoCard";

interface AlbumViewProps {
  album: Album;
}

export function AlbumView({ album }: AlbumViewProps) {
  return (
    <>
      <h2>🌄 {album.id}</h2>
      <div className="photos-list">
        {
          album.photos.slice(0, 3).map(p => <PhotoCard photo={p} />)
        }
      </div>
    </>
  )
}