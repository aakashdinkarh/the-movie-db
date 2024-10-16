import React from 'react';
import { Link } from "react-router-dom";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import HeroImage from "./HeroImage/HeroImage";
import Grid from "./Grid/Grid";
import Thumbnail from "./Thumbnail/Thumbnail";
import Spinner from "./Spinner/Spinner";
import SearchBar from "./SearchBar/SearchBar";
import Button from "./Button/Button";
import { FavBar } from "./BreadCrumb/BreadCrumb.styles";
import { useHomeFetch } from "../hooks/useHomeFetch";
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore } =
    useHomeFetch();

  if (error) return <div>Something went wrong...</div>;

  return (
    <>
      {!searchTerm && state.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      )}
      <SearchBar setSearchTerm={setSearchTerm} />
      <FavBar>
        <Link to="favMovies">Go to Favorites</Link>
      </FavBar>

      <Grid
        header={
          searchTerm ? `Search results for "${searchTerm}"` : "Popular Movies"
        }
      >
        {state.results.map((movie) => (
          <Thumbnail
            key={movie.id}
            clickable
            src={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text="Load More" handleClick={() => setIsLoadingMore(true)} />
      )}
    </>
  );
};

export default Home;
