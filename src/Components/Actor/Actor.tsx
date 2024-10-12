import React from "react";
import { Wrapper, Image } from "./Actor.styles";

type TActor = {
  name: string;
  character: string;
  imageUrl: string;
}

const Actor = ({ name, character, imageUrl }: TActor) => (
  <Wrapper>
    <Image src={imageUrl} alt="actor-img" />
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);

export default Actor;
