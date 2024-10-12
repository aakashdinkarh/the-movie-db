import React, { useEffect, useState } from "react";
import { FavoriteButton } from "./AddToFavoriteButton.styles";
import { getFavMoviesFromLocalStorage, TFavMovieDetails } from "../../utils/localStorageUtils";

type TAddToFavoriteButton = {
  movieId: number;
  src: string;
  clickable: boolean;
}

const AddToFavoriteButton = ({ movieId, src, clickable }: TAddToFavoriteButton) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const storedFavMovies = getFavMoviesFromLocalStorage();
    setIsFavorite(storedFavMovies.some((elem) => elem.movieId === movieId));
    }, [movieId]);

  const toggleFavorites = () => {
    const storedFavMovies = getFavMoviesFromLocalStorage();
    let newFavorites: TFavMovieDetails[] = [];
    if (isFavorite) {
      newFavorites = storedFavMovies.filter((elem) => elem.movieId !== movieId);
    } else {
      newFavorites = [...storedFavMovies, { movieId, src, clickable }];
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
