import React from 'react';
import Product from '../Product';

import { Container, Wrapper } from './styles';


export function Layout() {
  return (
    <Container>
      {/* <Header /> */}
      <Wrapper>
        <Product />
      </Wrapper>
      {/* <Footer /> */}
    </Container>
  );
}
