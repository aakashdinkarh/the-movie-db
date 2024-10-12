import React from "react";

import { Wrapper } from "./Button.styles";

type TButton = {
  handleClick: React.MouseEventHandler<HTMLButtonElement>
  text: string;
}

const Button = ({ handleClick, text }: TButton) => (
  <Wrapper onClick={handleClick}>{text}</Wrapper>
);

export default Button;
