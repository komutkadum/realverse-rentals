import Head from 'next/head';
import Footer from '../components/navigation/Footer';
import HomePage from '../components/templates/HomePage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Apartments for Rent Without Brokerage in India</title>
        <meta
          name="description"
          content="Lookup for Residential properties for rent in India Without Brokerage.0% Brokerage,100% Genuine Owners. India's #1 Real Estate Property Website Without Brokers. Get Rent Agreement,Packers and Movers,Property Management & Registration Service in India. Owners & NRI can List/Post Property Ad for FREE."
        />
        <meta
          name="keywords"
          content="flats for rent, Apartments for rent, Properties for rent, without broker, no brokerage, broker free rental properties, flat, apartment, rent, rental, Realverse Proptech, realverse.rentals, realverseproptech.com"
        />
        <meta
          property="og:title"
          content="Flats, Houses, Apartments for Rent Without Brokerage in India"
        />
        <meta
          property="og:description"
          content="Lookup for Residential properties for rent in India Without Brokerage.0% Brokerage,100% Genuine Owners. India's #1 Real Estate Property Website Without Brokers. Get Rent Agreement,Packers and Movers,Property Management & Registration Service in India. Owners & NRI can List/Post Property Ad for FREE."
        />
        <meta property="og:url" content="https://www.realverse.rentals" />
      </Head>
      <HomePage />
      <Footer />
    </>
  );
}
