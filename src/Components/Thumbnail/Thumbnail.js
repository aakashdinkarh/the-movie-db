import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { Image } from "./Thumbnail.styles";

const Thumbnail = ({ clickable, movieId, src }) =>
  clickable ? (
    <Link to={`/${movieId}`}>
      <Image src={src} alt="thumbnail-img" />
    </Link>
  ) : (
    <Image src={src} alt="thumbnail-img" />
  );

Thumbnail.propTypes = {
  clickable: PropTypes.bool,
  movieId: PropTypes.number,
  src: PropTypes.string,
};

export default Thumbnail;
