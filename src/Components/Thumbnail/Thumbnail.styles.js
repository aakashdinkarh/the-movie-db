import styled from "styled-components";

export const ThumbnailContainer = styled.div`
  position: relative;
  overflow: hidden;

  :hover {
    button {
      transform: translate(0);
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 20px;
  animation: animateThumbnail 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumbnail {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    margin: auto;
  }
`;
