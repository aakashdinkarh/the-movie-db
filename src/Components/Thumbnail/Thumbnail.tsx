import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddToFavoriteButton from "../AddToFavoriteButton/AddToFavoriteButton";
import { ThumbnailContainer, Image } from "./Thumbnail.styles";
import { convertToWebP } from "../../utils/toWebpImage";

type TThumbnail = {
  clickable: boolean;
  movieId?: number;
  src: string;
};

const Thumbnail = ({ clickable, movieId, src }: TThumbnail) => {
  const [webpSrc, setWebpSrc] = useState('');
  if (webpSrc === '') {
    (async () => {
      const convertedUrl = await convertToWebP(src);
      setWebpSrc(convertedUrl);
    })();
  }

  return clickable && movieId ? (
    <ThumbnailContainer>
      <AddToFavoriteButton movieId={movieId} clickable={clickable} src={src} />
      <Link to={`/${movieId}`}>
        <Image src={webpSrc} alt="thumbnail-img" />
      </Link>
    </ThumbnailContainer>
  ) : (
    <Image src={webpSrc} alt="thumbnail-img" />
  );
}

export default Thumbnail;
