import Head from 'next/head';
import Footer from '../components/navigation/Footer';

function OtherBusiness() {
  return (
    <>
      <Head>
        <title>Other Business</title>
      </Head>
      <ul className="py-20 grid gap-y-4 px-10 max-w-6xl list-decimal mx-auto">
        <li>
          <a
            href="https://prestigelavender-fields.in/"
            target="_blank"
            className=" transition-colors duration-200 hover:underline hover:underline-offset-8"
            rel="noreferrer"
          >
            Prestige Lavender Fields
          </a>
        </li>
        <li>
          <a
            href="https://realverseassociates.in/"
            target="_blank"
            className=" transition-colors duration-200 hover:underline hover:underline-offset-8"
            rel="noreferrer"
          >
            Realverse Associates
          </a>
        </li>
      </ul>
      <Footer />
    </>
  );
}

export default OtherBusiness;
