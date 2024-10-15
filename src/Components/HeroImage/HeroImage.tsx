import React, { useState } from "react";
import { Wrapper, Content, Text } from "./HeroImage.styles";
import { convertToWebP } from "../../utils/toWebpImage";

type THeroImage = {
  image: string;
  title: string;
  text: string;
}

const HeroImage = ({ image, title, text }: THeroImage) => {
  const [webpUrl, setWebpUrl] = useState('');
  if (webpUrl === '') {
    (async () => {
      const convertedUrl = await convertToWebP(image);
      setWebpUrl(convertedUrl);
    })();
  }

  return <Wrapper image={webpUrl}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
};

export default HeroImage;
