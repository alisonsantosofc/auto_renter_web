import Head from 'next/head';

import { Rent } from '../views/Rent';

export default function RentPage() {
  return (
    <>
      <Head>
        <title>auto Renter | alugar</title>
      </Head>
      <Rent />
    </>
  );
}
