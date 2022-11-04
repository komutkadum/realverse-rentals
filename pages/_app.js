import { UserProvider } from '@auth0/nextjs-auth0';
import Router, { useRouter } from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import Header from '../components/navigation/Header';
import '../styles/globals.css';

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <UserProvider>
        {router.pathname !== '/signin' ? <Header /> : ''}
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
}

export default MyApp;
