import { KeyboardEvent, useState } from 'react';
import Image from 'next/image';
import { MagnifyingGlass } from 'phosphor-react';
import ReactModal from 'react-modal';

import Layout from '../../components/Layout';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container } from './styles';

import { formatAmount } from '../../utils/format';
import { RentCarModal } from '../../components/RentCarModal';

export interface Car {
  id: string;
  brand: string;
  model: string;
  pricePerDay: number;
  pricePerKm: number;
  maxDuration: number;
  maxDistance: number;
}

export function Rent() {
  const [cars, setCars] = useState<Car[]>([]);
  const [maxDuration, setMaxDuration] = useState(0);
  const [maxDistance, setMaxDistance] = useState(0);

  const [isResponseMessageActive, setIsResponseMessageActive] = useState(false);
  const [carSeletedToRent, setCarSeletedToRent] = useState<Car>({} as Car);
  const [isOpenModal, setIsOpenModal] = useState(false);

  async function handleFindAvailableCars() {
    try {
      const params = new URLSearchParams({
        maxDuration: String(maxDuration),
        maxDistance: String(maxDistance),
      });

      const response = await (await fetch(`http://localhost:3333/cars?` + params)).json();

      setCars(response.cars);
      setIsResponseMessageActive(true);

      console.log(cars);
    } catch (error) {
      console.log({ msg: 'Erro na requisição!', error });
    }
  }

  function handleRentCar(car: Car) {
    setCarSeletedToRent(car);

    setIsOpenModal(true);
  }

  function handlePressKey(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      handleFindAvailableCars();
    }
  }

  return (
    <Layout>
      <Container>
        <div>
          <h2>Encontre um carro para alugar</h2>

          <form>
            <label htmlFor="maxDuration">
              dias{' '}
              <Input
                id="maxDuration"
                type="number"
                onKeyDown={(e) => handlePressKey(e)}
                onChange={(e) => setMaxDuration(Number(e.target.value))}
              />
            </label>

            <label htmlFor="maxDistance">
              distância (km){' '}
              <Input
                id="maxDistance"
                type="number"
                onKeyDown={(e) => handlePressKey(e)}
                onChange={(e) => setMaxDistance(Number(e.target.value))}
              />
            </label>

            <MagnifyingGlass weight="bold" onClick={() => handleFindAvailableCars()} />
          </form>
        </div>

        {isResponseMessageActive &&
          (cars.length ? (
            <h4>
              Encontramos para você: <span>{cars.length}</span> carro
              {cars.length > 1 ? 's' : ''}
            </h4>
          ) : (
            <h4>Não encontramos nenhum carro com esses critérios :(</h4>
          ))}

        <ul>
          {cars.map((car) => (
            <li key={car.id}>
              <Image
                src={require(`../../../public/cars/${car.id}.png`)}
                alt={car.model}
                width={300}
                height={150}
              />

              <div className="info-container">
                <p>
                  Preço por dia:{' '}
                  <span>
                    {formatAmount({
                      amount: car.pricePerDay,
                      currency: 'BRL',
                      lang: 'pt-br',
                    })}
                  </span>
                </p>

                <p>
                  Preço por km:{' '}
                  <span>
                    {formatAmount({
                      amount: car.pricePerKm,
                      currency: 'BRL',
                      lang: 'pt-br',
                    })}
                  </span>
                </p>
              </div>

              <div className="rent-container">
                <p>
                  <strong>{car.model}</strong>
                  <span>{car.brand}</span>
                </p>

                <Button onClick={() => handleRentCar(car)}>Alugar</Button>
              </div>
            </li>
          ))}
        </ul>

        {carSeletedToRent && (
          <RentCarModal
            car={carSeletedToRent}
            isOpen={isOpenModal}
            onRequestClose={() => setIsOpenModal(!isOpenModal)}
          />
        )}
      </Container>
    </Layout>
  );
}
