import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background: var(--darkGrey);
  color: var(--white);
  border-radius: 30px;
  border: none;
  height: 40px;
  width: 20%;
  min-width: 180px;
  max-width: 200px;
  margin: 20px auto;
  font-size: var(--fontMed);
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
