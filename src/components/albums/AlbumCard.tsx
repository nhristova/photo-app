import { Link } from 'react-router-dom';

interface AlbumCardProps {
  id: string,
  count: number,
  thumbnail: string,
}

export function AlbumCard(props: AlbumCardProps) {
  return (
    <div>
      <Link to={`/albums/${props.id}`}>
        <img src={props.thumbnail} className="album-img" alt="Album thumbnail"/>
        <div>Album {props.id}</div>
        <div className="album-detail">{props.count} photos</div>
      </Link>
    </div>
  )
}