interface AlbumCardProps {
  albumName: string
}

export function AlbumCard(props: AlbumCardProps) {
  return (
    <div className="album-card">Album {props.albumName}</div>
  )
}