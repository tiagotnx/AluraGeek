import { Container, HeaderContainer, Logo } from './style';
import TextInput from '../../TextInput';
import ButtonWhite from '../../ButtonWhite';

type Props = {
    textButton: string,
    linkButton: string
}

const Header = ({linkButton ,textButton}: Props) => {
  return (
    <>
        <HeaderContainer>
            <Container>
                <Logo src="/images/logo.svg" alt='Controle de video game ao lado da escrita AluraGeek'/>
                <TextInput />
            </Container>
                <ButtonWhite link={linkButton} >{textButton}</ButtonWhite>
        </HeaderContainer>
    </>
  )
}

export default Header