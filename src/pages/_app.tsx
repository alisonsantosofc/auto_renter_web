import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import { GlobalStyles } from '../styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ToastContainer
        autoClose={5000}
        className="react-toastfy-container"
        toastClassName="react-toastfy-content"
        icon={false}
        position="top-center"
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
