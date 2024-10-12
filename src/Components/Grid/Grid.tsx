import React, { PropsWithChildren } from "react";

import { Wrapper, Content } from "./Grid.styles";

type IGrid = {
  header: string;
} & PropsWithChildren;

const Grid = ({ header, children }: IGrid) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

export default Grid;
