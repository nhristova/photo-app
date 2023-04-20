import { Photo } from "../types/Photo";

interface PhotoCardProps {
  photo: Photo;
}

export function PhotoCard({ photo }: PhotoCardProps) {
  return (
    <div className="photo-card">
      <div className="fav-icon">⭐</div>
      <img src={photo.thumbnailUrl} />
      <div>{photo.title}</div>
    </div>
  )
}