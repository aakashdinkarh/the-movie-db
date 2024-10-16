import styled from "styled-components";

export const Wrapper = styled.div<{ backdropImage: string }>`
  background: ${({ backdropImage }) => backdropImage ? `url(${backdropImage})` : "#000"};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 20px;

  @media screen and (max-width: 980px) {
    display: block;
    text-align: center;
    max-height: none;
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;
  text-align: left;

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    text-align: center;
    line-height: 35px;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  h1 {
    @media screen and (max-width: 980px) {
      font-size: var(--fontBig);
    }
  }
`;
