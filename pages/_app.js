import { SessionProvider } from 'next-auth/react';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import Header from '../components/navigation/Header';
import '../styles/globals.css';

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <SessionProvider session={session}>
        <Header />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
