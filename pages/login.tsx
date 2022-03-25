import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../src/components/patterns/Footer';
import Header from '../src/components/patterns/Header';
import { Button, Form, InputText, Main, Title } from '../styles/styles-login';

const Login: NextPage = () => {
    const preventReload =  (event: any) => {
      event.preventDefault()
    }

    return (
      <>
        <Head>
          <title>AluraGeek - Login</title>
        </Head>
        <Header textButton='Login' linkButton='/login' />
            <Main>
                <Form>
                        <Title>Iniciar Sessão</Title>
                        <InputText 
                        type='email'
                        placeholder='Escreva seu email'
                         />
                         <InputText 
                        type='password'
                        placeholder='Escreva sua senha'
                         />
                         <Button onClick={preventReload}>Entrar</Button>
                </Form>
            </Main>
      </>
    )
  }
  
  export default Login;
  