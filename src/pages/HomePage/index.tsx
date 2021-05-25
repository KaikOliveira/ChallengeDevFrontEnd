import React from 'react';

import imgBackground from '../../assets/Background.png';
import { Wrapper } from './styles';

export const HomePage: React.FC = () => (
  <Wrapper>
    <h1>Home Page</h1>

    <img src={imgBackground} alt="imgBackground" />
  </Wrapper>
);
