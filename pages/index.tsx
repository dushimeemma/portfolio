import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/shared/Footer';

import Navbar from '../components/shared/Navbar';
import About from './about';
import Contact from './contact';
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
      <Contact />
      <Footer />
    </>
  );
};

export default LandingPage;
