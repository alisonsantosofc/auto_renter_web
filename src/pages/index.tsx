import Head from 'next/head';

import { Dashboard } from '../views/Dashboard';

export default function Home() {
  return (
    <>
      <Head>
        <title>auto Renter</title>
      </Head>
      <Dashboard />
    </>
  );
}
