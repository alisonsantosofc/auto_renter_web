import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import { DarkModeProvider } from '../hooks/useDarkMode';

import { GlobalStyles } from '../styles/global';
import { SessionUserProvider } from '../hooks/useSessionUser';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SessionUserProvider>
        <DarkModeProvider>
          <GlobalStyles />
          <ToastContainer
            autoClose={5000}
            className="react-toastfy-container"
            toastClassName="react-toastfy-content"
            icon={false}
            closeButton={false}
            position="top-center"
          />
          <Header />

          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} />
          </AnimatePresence>

          <Footer />
        </DarkModeProvider>
      </SessionUserProvider>
    </>
  );
}
