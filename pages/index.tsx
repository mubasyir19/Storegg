import { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head';
import MainBanner from '../components/organisms/MainBanner';
import TransactionStep from '../components/organisms/TransactionStep';
import FeaturedGame from '../components/organisms/FeaturedGame';
import Reached from '../components/organisms/Reached';
import Story from '../components/organisms/Story';
import Footer from '../components/organisms/Footer';
import Navbar from '../components/organisms/Navbar';

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>StoreGG - Get a New Experience in Gaming</title>
        <meta
          name='description'
          content='Kami menyediakan jutaan cara untuk membantu
players menjadi pemenang sejati'
        />
        <meta property='og:title' content='StoreGG - Get a New Experience in Gaming' />
        <meta
          property='og:description'
          content='Kami menyediakan jutaan cara untuk membantu
players menjadi pemenang sejati'
        />
        <meta property='og:image' content='https://ibb.co/wJLJ553' />
        <meta property='og:url' content='htttp://storegg.com' />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
