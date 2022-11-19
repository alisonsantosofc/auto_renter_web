import { CarSimple, MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';
import { Input } from '../../components/Input';
import Layout from '../../components/Layout';
import { Container } from './styles';

interface Car {
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

  async function handleFindAvailableCars() {
    try {
      const params = new URLSearchParams({
        maxDuration: String(maxDuration),
        maxDistance: String(maxDistance),
      });

      const response = await (
        await fetch(`http://localhost:3333/cars?` + params)
      ).json();

      setCars(response.cars);
      setIsResponseMessageActive(true);

      console.log(cars);
      
    } catch (error) {
      console.log({ msg: 'Erro na requisição!', error });
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
                onChange={(e) => setMaxDuration(Number(e.target.value))}
              />
            </label>

            <label htmlFor="maxDistance">
              distância (km){' '}
              <Input
                id="maxDistance"
                type="number"
                onChange={(e) => setMaxDistance(Number(e.target.value))}
              />
            </label>

            <MagnifyingGlass
              weight="bold"
              onClick={() => handleFindAvailableCars()}
            />
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
          {cars.map(car => (
            <li key={car.id}>
              {/* <Image src={`./src/assets/images/cars/`} /> */}
              <strong>{car.model} {car.brand}</strong>
              <p>ID = {car.id}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Layout>
  );
}
