//components
import Grid from "./Grid/Grid";
import Thumbnail from "./Thumbnail/Thumbnail";
import BreadCrumb from "./BreadCrumb/BreadCrumb";

const FavoriteMovies = () => {
  const favMovies = JSON.parse(localStorage.getItem("favorites"));

  let result =
    favMovies?.length !== 0 ? (
      <Grid header="Your Favorite Movies">
        {favMovies.map((movie) => (
          <Thumbnail
            key={movie.movieId}
            clickable={movie.clickable}
            src={movie.src}
            movieId={movie.movieId}
          />
        ))}
      </Grid>
    ) : (
      <h2>No Favorites Movies to show</h2>
    );

  return (
    <>
      <BreadCrumb movieTitle="Favorites" />
      {result}
    </>
  );
};

export default FavoriteMovies;
