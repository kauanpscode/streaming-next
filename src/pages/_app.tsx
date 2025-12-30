import type { AppProps } from 'next/app';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/globals.css';
import { roboto } from '../fonts/fonts';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${roboto.className} min-h-screen bg-black text-white flex flex-col`}>
      <Header />
      <main className="flex-1 mx-auto w-full">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
