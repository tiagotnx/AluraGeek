import type { NextPage } from 'next';
import Header from '../src/components/patterns/Header';
import Head from 'next/head';
import SecBanner from '../src/components/patterns/Banner';
import SecItens from '../src/components/patterns/SecItens';
import { Main } from '../styles/styles';

const Home: NextPage = () => {
  return (
    <>
      <Head>
      <title>AluraGeek - Página inicial</title>
      </Head>
      <Header textButton='Login' linkButton='/login'/>
      <SecBanner/>
      <Main>
        <SecItens titleSection='Star Wars' linkAll='/starwars'/>
        <SecItens titleSection='Consoles' linkAll='/consoles'/>
        <SecItens titleSection='Diversos' linkAll='/diversos'/>
      </Main>
    </>
  )
}

export default Home;
