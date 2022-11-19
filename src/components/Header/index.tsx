import Image from 'next/image';
import { useRouter } from 'next/router';
import { List } from 'phosphor-react';
import React, { useState } from 'react';

import logo from '../../assets/images/logo.svg';

import { Container } from './styles';

export function Header() {
  const router = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function handleOpenMenu() {
    setIsOpenMenu(true);
  }

  function handleCloseMenu() {
    setIsOpenMenu(false);
  }

  return (
    <Container>
      <div>
        <Image src={logo} alt="auto Renter" onClick={() => {router.push('/')}} />

        <List
          weight="bold"
          onClick={() => {
            !isOpenMenu ? handleOpenMenu() : handleCloseMenu();
          }}
        />

        {isOpenMenu && (
          <nav onMouseLeave={() => handleCloseMenu()}>
            <a href="">Meu perfil</a>
            <a href="">Carros alugados</a>
            <a href="">Clube de descontos</a>
            <a href="">Configurações</a>
            <a href="">Ajuda</a>
          </nav>
        )}
      </div>
    </Container>
  );
}
