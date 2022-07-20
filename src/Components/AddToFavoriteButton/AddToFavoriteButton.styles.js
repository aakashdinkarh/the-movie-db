import styled from "styled-components";

export const FavoriteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  border: none;
  z-index: 1;
  background-color: rgba(255 255 255 / 70%);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  transition: all 0.2s;
  cursor: pointer;

  ::before,
  ::after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 10px;
    left: 6px;
    width: 15px;
    height: 10px;
    border-radius: 20px 0px 0px 20px;
    transform: rotate(45deg);
    background-color: ${({ IsFavorite }) =>
      IsFavorite ? "rgba(255 0 0)" : "#9e9e9e"};
  }
  ::after {
    right: 5px;
    left: auto;
    transform: rotate(-45deg) rotateY(180deg);
  }

  @media screen and (min-width: 720px) {
    transform: translateY(-50px);
  }
`;
