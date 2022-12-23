import Head from 'next/head';
import Router from "next/router";
import nProgress from "nprogress";
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from './../styles/theme';
import GlobalStyles from './../styles/globalStyles'

import './../styles/nprogress.css'

Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeComplete", nProgress.done);

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <title>IPaddress</title>
        <link rel="shorcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="referrer" content="no-referrer" />
        <meta name="keywords" content="ip address, ip, meu endereço IP, meu ip" />
        <meta
          name="description"
          content="Qual é o seu endereço IPv4 ou IPv6 público, as informações do seu endereço IP mostram sua localização; cidade, região, país, ..."
        />
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
