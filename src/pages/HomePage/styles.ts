import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--background);
  width: 100vw;
  max-width: 1400px;
  height: 100vh;
  position: relative;

  img {
    position: absolute;
    right: 5%;
    bottom: 3%;
    width: 45%;
    height: 50%;
  }
`;
