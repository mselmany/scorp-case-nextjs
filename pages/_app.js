import Head from 'next/head'
import { StoreProvider } from 'easy-peasy';
import store from '../store';
import { globalStyles } from '../styles/global';
import useTranslations from '../hooks/useTranslations';

import Header from '../partials/Header';
import Layout from '../partials/Layout';
import Footer from '../partials/Footer';
import ModalRoot from '../partials/ModalRoot';
import { Colors } from '../styles/system';

export default function App(props) {
  return <StoreProvider store={store}>
    <Root {...props} />
  </StoreProvider>
}

function Root({ Component, pageProps }) {
  const translations = useTranslations();

  return <>
    <Head>
      <title>{translations[Component.title]}</title>
      {Component.description && <meta name="description" content={Component.description} />}
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1,initial-scale=1"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="theme-color" content={Colors.link} />
    </Head>
    {globalStyles}
    <Layout>
      <Header title={translations[Component.title]} />
      <Component {...pageProps} />
      <Footer />
    </Layout>
    <ModalRoot />
  </>
}

