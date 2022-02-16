import type { NextPage } from 'next';
import Head from 'next/head';

import Navbar from '../components/shared/Navbar';
import About from './about';
import Home from './home';
import Portfolio from './portfolio';

const LandingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Emmanuel Dushime</title>
      </Head>
      <Home />
      <Navbar />
      <About />
      <Portfolio />
    </>
  );
};

export default LandingPage;
