import Router from "next/router";
import Head from "next/head";
import NProgress from "nprogress";
import { ThemeProvider } from "styled-components";
import Script from "next/script";

import GlobalStyle from "./../styles/Global";
import Theme from "./../styles/Theme";

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>IPadress</title>
        <meta charSet="utf-8" />
        <meta name="referrer" content="no-referrer" />
        <meta name="keywords" content="IP Adress, IP, Meu endereço IP" />
        <meta
          name="description"
          content="Qual é o seu endereço IPv4 ou IPv6 público, As informações do seu endereço IP mostram sua localização; cidade, região, país, ..."
        />
        <link rel="stylesheet" href="/nprogress.css" />
        <Script src="nprogress.js" />
      </Head>

      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
