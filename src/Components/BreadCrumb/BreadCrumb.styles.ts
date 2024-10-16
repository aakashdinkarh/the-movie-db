import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--medGrey);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  color: var(--white);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;

  span {
    font-size: var(--fontMed);
    color: var(--white);
    padding-right: 10px;

    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
  a:link {
    text-decoration: none;
  }
`;

export const FavBar = styled.div`
  display: flex;
  font-weight: bold;
  font-size: var(--fontMed);
  padding: 10px 20px 0 0;
  justify-content: flex-end;

  a {
    color: black;
    text-decoration: none;
  }
`;
