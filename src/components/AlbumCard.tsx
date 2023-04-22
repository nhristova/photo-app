import { Link } from 'react-router-dom';

interface AlbumCardProps {
  albumName: string
}

export function AlbumCard(props: AlbumCardProps) {
  return (
    <div className="album-card">
      <Link to={`/albums/${props.albumName}`}>Album {props.albumName}</Link>
    </div>
  )
}