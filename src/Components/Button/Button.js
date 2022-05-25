import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./Button.styles";

const Button = ({ handleClick, text }) => (
  <Wrapper onClick={handleClick}>{text}</Wrapper>
);

Button.propTypes = {
  handleClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
