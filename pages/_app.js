import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress
import Header from '../components/navigation/Header';
import '../styles/globals.css';

//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// // show loader before loading pages
// function Loading() {
//   const router = useRouter();
//   const [loading, setLoading] = useState();
//   useEffect(() => {
//     const handleStart = (url) => url !== router.asPath && setLoading(true);
//     const handleComplete = (url) => url === router.asPath && setLoading(false);

//     router.events.on('routeChangeStart', handleStart);
//     router.events.on('routeChangeComplete', handleComplete);
//     router.events.on('routeChangeError', handleComplete);

//     return () => {
//       router.events.off('routeChangeStart', handleStart);
//       router.events.off('routeChangeComplete', handleComplete);
//       router.events.off('routeChangeError', handleComplete);
//     };
//   });
//   return (
//     loading && (
//       <div className="w-screen h-screen fixed text-7xl z-30 grid place-items-center overflow-hidden bg-white">
//         <i className="fa-solid fa-spinner shadow-none animate-spin"></i>
//       </div>
//     )
//   );
// }

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Loading /> */}
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
