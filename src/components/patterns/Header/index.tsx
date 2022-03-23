import { Container, HeaderContainer, Logo, HeaderW } from './style';
import TextInput from '../../TextInput';
import ButtonWhite from '../../ButtonWhite';
import LinkP from '../../Link';

type Props = {
  textButton: string,
  linkButton: string
}

const Header = ({ linkButton, textButton }: Props) => {
  return (
    <>
      <HeaderW>
        <HeaderContainer>
          <Container>
            <LinkP href='/'>
            <Logo src="/images/logo.svg" alt='Controle de video game ao lado da escrita AluraGeek' />
            </LinkP>
            <TextInput />
          </Container>
          <ButtonWhite link={linkButton} >{textButton}</ButtonWhite>
        </HeaderContainer>
      </HeaderW>
    </>
  )
}

export default Header