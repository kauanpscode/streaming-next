import Header from "../components/Header";
import Footer from "../components/Footer";

import { GlobalStyles } from '../styles/global-styles';
import { AppProps } from "next/app";

import { roboto } from "../fonts/fonts";

/* eslint-disable react/prop-types */
export default function MyApp({ Component, pageProps } : AppProps) {
  return (
    <div id="root" className={roboto.className}>
      <GlobalStyles />
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
    </div>
  );
}
