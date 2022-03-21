import type { NextPage } from 'next';
import Head from 'next/head';
import SecBanner from '../src/components/patterns/Banner';
import Footer from '../src/components/patterns/Footer';
import Header from '../src/components/patterns/Header';
import SecItens from '../src/components/patterns/SecItens';
import { Main } from '../styles/styles';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AluraGeek - Página inicial</title>
      </Head>
      <Header textButton='Login' linkButton='/login' />
      <SecBanner />
      <Main>
        <SecItens titleSection='Star Wars' linkAll='/star-wars' products={[]} />
        <SecItens titleSection='Consoles' linkAll='/consoles' products={[]}/>
        <SecItens titleSection='Diversos' linkAll='/misc' products={[]}/>
      </Main>
      <Footer />
    </>
  )
}

export default Home;
