import ButtonBlue from '../../ButtonBlue';
import { Banner, TitleBanner, SubTitle, TextBanner } from './style';


const SecBanner = () => {
    return (
      <>
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
  
  export default SecBanner;