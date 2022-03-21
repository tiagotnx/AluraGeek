import { ButtonForm } from '../../ButtonBlue/style';
import LinkP from '../../Link';
import { Container, Div, Fieldset, FooterCopyright, FooterInfo, FooterSection, Form, Input, Label, Legend, ListLink, Logo, TextArea, TextCopyright } from './style';

const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterInfo>
          <Container>
            <Logo src='./images/logo.svg' alt='Controle de video game ao lado da escrita AluraGeek'/>
            <ListLink>
              <LinkP href='/'>Quem somos nós</LinkP>
              <LinkP href='/'>Política de privacidade</LinkP>
              <LinkP href='/'>Programa fidelidade</LinkP>
              <LinkP href='/'>Nossas lojas</LinkP>
              <LinkP href='/'>Quero ser franqueado</LinkP>
              <LinkP href='/'>Anuncie aqui</LinkP>
            </ListLink>
            <Form>
              <Fieldset>
                <Legend>Fale conosco</Legend>
                <Div>
                  <Label htmlFor='nameUser'>Nome</Label>
                  <Input id='nameUser'/>
                </Div>
                <TextArea placeholder='Escreva sua mensagem' />
                <ButtonForm>Enviar mensagem</ButtonForm>
              </Fieldset>
            </Form>
          </Container>
        </FooterInfo>
        <FooterCopyright>
          <TextCopyright>Desenvolvido por TiagoTNX</TextCopyright>
          <TextCopyright>2022</TextCopyright>
        </FooterCopyright>
      </FooterSection>
    </>
  )
}

export default Footer;