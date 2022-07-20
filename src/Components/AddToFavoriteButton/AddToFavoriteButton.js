import { useEffect, useState } from "react";
import { FavoriteButton } from "./AddToFavoriteButton.styles";

const AddToFavoriteButton = ({ movieId, src, clickable }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("favorites")) {
      const prevFavorites = JSON.parse(localStorage.getItem("favorites"));
      setIsFavorite(prevFavorites.find((elem) => elem.movieId === movieId));
    } else {
      localStorage.setItem("favorites", JSON.stringify([]));
    }
  }, [movieId]);

  const toggleFavorites = () => {
    const prevFavorites = JSON.parse(localStorage.getItem("favorites"));
    let newFavorites;
    if (isFavorite) {
      newFavorites = prevFavorites.filter((elem) => elem.movieId !== movieId);
    } else {
      newFavorites = [...prevFavorites, { movieId, src, clickable }];
    }
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsFavorite((prev) => !prev);
  };

  return (
    <FavoriteButton
      IsFavorite={isFavorite}
      onClick={toggleFavorites}
    ></FavoriteButton>
  );
};

export default AddToFavoriteButton;
