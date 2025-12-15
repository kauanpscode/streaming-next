import Header from "../components/Header";
import Footer from "../components/Footer";

import { GlobalStyles } from '../styles/global-styles';


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
    </>
  );
}
