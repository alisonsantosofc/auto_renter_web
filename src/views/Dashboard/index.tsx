import { useRouter } from 'next/router';
import Image from 'next/image';
import { Check } from 'phosphor-react';

import { Container } from './styles';

import slider from '../../assets/images/slider.png';
import { Button } from '../../components/Button';
import React from 'react';
import Layout from '../../components/Layout';

export function Dashboard() {
  const router = useRouter();

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();

    router.push('/rent');
  };

  return (
    <Layout>
      <Container>
        <section>
          <h1>Encontre e alugue carros de uma forma prática e rápida</h1>
          <p>
            Os melhores modelos de carros já estão disponíveis no{' '}
            <span>Renter Club</span>, assine por apenas{' '}
            <span style={{ color: '#fa4e3f' }}>R$ 18,98</span> e receba
            descontos especiais todos os meses!
          </p>

          <div>
            <div className="buttons-container">
              <Button onClick={(e) => handleClick(e)}>
                Alugar um carro agora
              </Button>
              <Button>Assinar Renter Club</Button>
            </div>

            <div className="count-container">
              <Check weight="bold" />

              <p>
                <span>+12.800</span>
                <span>pessoas já estão usando</span>
              </p>
            </div>
          </div>
        </section>

        <div>
          <Image src={slider} alt="carros" />

          <div className="effect-bg"></div>
        </div>
      </Container>
    </Layout>
  );
}
