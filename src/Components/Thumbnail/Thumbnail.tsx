import React from "react";
import { Link } from "react-router-dom";
import AddToFavoriteButton from "../AddToFavoriteButton/AddToFavoriteButton";
import { ThumbnailContainer, Image } from "./Thumbnail.styles";

type TThumbnail = {
  clickable: boolean;
  movieId?: number;
  src: string;
};

const Thumbnail = ({ clickable, movieId, src }: TThumbnail) =>
  clickable && movieId ? (
    <ThumbnailContainer>
      <AddToFavoriteButton movieId={movieId} clickable={clickable} src={src} />
      <Link to={`/${movieId}`}>
        <Image src={src} alt="thumbnail-img" />
      </Link>
    </ThumbnailContainer>
  ) : (
    <Image src={src} alt="thumbnail-img" />
  );

export default Thumbnail;
