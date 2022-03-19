import type { NextPage } from 'next';
import Header from '../src/components/patterns/Header';
import { Banner, TitleBanner, SubTitle, TextBanner } from '../styles/styles';
import ButtonBlue from '../src/components/ButtonBlue';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
      <title>AluraGeek - Home</title>
      </Head>
      <Header textButton='Login' linkButton='/login'/>
      <Banner title='Imagem de uma mão segurando um cogumelo'>
        <TextBanner>
          <TitleBanner>
            Dezembro Promocional
          </TitleBanner>
          <SubTitle>
            Produtos selecionados com 33% de desconto
          </SubTitle>
          <ButtonBlue link="/consoles">
          Ver Consoles
          </ButtonBlue>
        </TextBanner>
      </Banner>
    </>
  )
}

export default Home
