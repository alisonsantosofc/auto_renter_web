import Image from 'next/image';
import { Check } from 'phosphor-react';

import { Container } from './styles';

import slider from '../../assets/slider.png';
import { Button } from '../../components/Button';

export function Dashboard() {
  return (
    <Container>
      <section>
        <h1>Encontre e alugue carros de uma forma prática e rápida</h1>
        <p>
          Os melhores modelos de carros já estão disponíveis no <span>Renter Club</span>,
          assine por apenas <span>R$ 18,98</span> e receba descontos especiais todos os meses!
        </p>

        <div>
          <div>
            <Button>Alugar um carro agora</Button>
            <Button>Assinar Renter Club</Button>
          </div>

          <div>
            <Check weight="bold" />

            <p>
              <span>+12.800</span>
              <span>pessoas já estão usando</span>
            </p>
          </div>
        </div>
      </section>

      <Image src={slider} alt="carros" />
    </Container>
  );
}
