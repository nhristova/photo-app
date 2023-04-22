import { useSelector } from "react-redux";
import { AppState } from "../features/favoritesSlice";
import { useEffect, useState } from "react";
import { getPhotos } from "../data/loadData";
import { Photo } from "../types/Photo";
import { PhotoCard } from "./PhotoCard";

export function FavoritesView() {
  const selectFavorites = (state: AppState) => state.favorites;
  const favorites = useSelector(selectFavorites);
  const [favs, setFavs] = useState([] as Photo[])

  useEffect(() => {
    getPhotos()
      .then(data => {
        const favs = data.filter(el => favorites.includes(el.id));
        setFavs(favs);
      })
  }, [favorites])

  return (
    <>
      <h2>Favorites</h2>
      <div className="photos-list">
        {favs.map(photo => <PhotoCard key={photo.id} photo={photo} />)}
      </div>
    </>
  )
}