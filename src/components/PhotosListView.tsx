import { useEffect, useState } from "react";
import { getPhotos } from "../data/loadData";
import { Photo } from "../types/Photo";
import { PhotoCard } from "./PhotoCard";

export function PhotosListView() {
  const [photos, setPhotos] = useState([] as Photo[])

  useEffect(() => {
    getPhotos()
      .then(data => setPhotos(data))
  }, []);

  return (
    <>
      <h2>Photos</h2>
      <div className="photos-list">
        {photos.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
      </div>
    </>
  )
}