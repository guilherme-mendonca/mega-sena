import type { NextPage } from 'next';
import Head from 'next/head';
import {RandomMegaSena} from '../components';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Aposta para Mega-Sena</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <RandomMegaSena />
      </main>
    </>
  );
};

export default Home;
