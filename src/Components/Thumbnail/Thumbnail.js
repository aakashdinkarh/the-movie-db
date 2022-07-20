import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AddToFavoriteButton from "../AddToFavoriteButton/AddToFavoriteButton";
import { ThumbnailContainer, Image } from "./Thumbnail.styles";

const Thumbnail = ({ clickable, movieId, src }) =>
  clickable ? (
    <ThumbnailContainer>
      <AddToFavoriteButton movieId={movieId} clickable={clickable} src={src} />
      <Link to={`/${movieId}`}>
        <Image src={src} alt="thumbnail-img" />
      </Link>
    </ThumbnailContainer>
  ) : (
    <Image src={src} alt="thumbnail-img" />
  );

Thumbnail.propTypes = {
  clickable: PropTypes.bool,
  movieId: PropTypes.number,
  src: PropTypes.string,
};

export default Thumbnail;
