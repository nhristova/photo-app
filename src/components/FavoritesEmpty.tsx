
import unicorn from '../assets/unicorn.svg';

export function FavoritesEmpty() {
  return (
    <div>
      <img src={unicorn} className="unicorn-img" alt="Unicorn image" />
      <div>You do not have any favorites yet. You can add some when browsing photos by clicking on the star in the top right corner of the photo.</div>
    </div>
  )
}