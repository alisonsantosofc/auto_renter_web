import Image from 'next/image';
import React from 'react';

import logo from '../../assets/logo.svg';

import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <div>
        <Image src={logo} alt="auto Renter" />
      </div>
    </Container>
  );
}
