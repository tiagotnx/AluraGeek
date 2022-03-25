import LinkP from '../../Link';
import { Button, Container, ContainerDiv, Div, Fieldset, FooterCopyright, FooterInfo, FooterSection, Form, Input, Label, Legend, ListLink, Logo, TextArea, TextCopyright } from './style';

const Footer = () => {
    const preventReload =  (event: any) => {
      event.preventDefault()
    }

  return (
    <>
      <FooterSection>
        <FooterInfo>
          <Container>
            <ContainerDiv>
              <LinkP href='/'>
              <Logo src='/images/logo.svg' alt='Controle de video game ao lado da escrita AluraGeek' />
              </LinkP>
              <ListLink>
                <LinkP href='/'>Quem somos nós</LinkP>
                <LinkP href='/'>Política de privacidade</LinkP>
                <LinkP href='/'>Programa fidelidade</LinkP>
                <LinkP href='/'>Nossas lojas</LinkP>
                <LinkP href='/'>Quero ser franqueado</LinkP>
                <LinkP href='/'>Anuncie aqui</LinkP>
              </ListLink>
            </ContainerDiv>
            <Form>
              <Fieldset>
                <Legend>Fale conosco</Legend>
                <Div>
                  <Label htmlFor='nameUser'>Nome</Label>
                  <Input id='nameUser' />
                </Div>
                <TextArea placeholder='Escreva sua mensagem' />
                <Button onClick={preventReload}>Enviar mensagem</Button>
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