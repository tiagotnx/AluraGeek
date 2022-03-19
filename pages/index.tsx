import type { NextPage } from 'next';
import Header from '../src/components/patterns/Header';
import { Banner, TitleBanner, SubTitle, TextBanner } from '../styles/styles';
import ButtonBlue from '../src/components/ButtonBlue';

const Home: NextPage = () => {
  return (
    <>
      <Header textButton='Login' linkButton='/login'/>
      <Banner>
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
