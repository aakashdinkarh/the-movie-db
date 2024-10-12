import React from "react";
import Thumbnail from "../Thumbnail/Thumbnail";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import { Wrapper, Content, Text } from "./MovieInfo.styles";
import NoImage from "../../images/no_image.jpg";
import { TMovieState } from "../../hooks/movieFetchTypes";

const MovieInfo = ({ movie }: { movie: TMovieState }) => {
  return (
    <Wrapper backdrop_path={movie.backdrop_path}>
      <Content>
        <Thumbnail
          src={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <h1>{movie.title}</h1>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};

export default MovieInfo;
