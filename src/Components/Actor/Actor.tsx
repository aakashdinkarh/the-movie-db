import React, { useState } from "react";
import { Wrapper, Image } from "./Actor.styles";
import { convertToWebP } from "../../utils/toWebpImage";

type TActor = {
  name: string;
  character: string;
  imageUrl: string;
}

const Actor = ({ name, character, imageUrl }: TActor) => {
  const [webpUrl, setWebpUrl] = useState('');
  if (webpUrl === '') {
    (async () => {
      const convertedUrl = await convertToWebP(imageUrl);
      setWebpUrl(convertedUrl);
    })();
  }

  return <Wrapper>
    <Image src={webpUrl} alt="actor-img" />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
};

export default Actor;
