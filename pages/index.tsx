import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import category from '../public/ListOfProducts/products.json';
import SecBanner from '../src/components/patterns/Banner';
import Header from '../src/components/patterns/Header';
import SecItens from '../src/components/patterns/SecItens';
import { Main } from '../styles/styles';
import supabase from './api/supabase';

const Home: NextPage = () => {

  const [listaDeProdutos, setListaDeProdutos] = useState([]);
  const starwars = listaDeProdutos.filter((categoria) => categoria['category'] == 'Star Wars');
  const consoles = listaDeProdutos.filter((categoria) => categoria['category'] == 'Consoles');
  const misc = listaDeProdutos.filter((categoria) => categoria['category'] == 'Diversos');

  
  useEffect(() => {
      let Products = supabase
          .from('Products')
          .select('*')
          .then(({ data }: any) => {
              console.log('Dados da consulta:', data);
              setListaDeProdutos(data);
          })
  }, [])

  return (
    <>
      <Head>
        <title>AluraGeek - Página inicial</title>
      </Head>
      <Header textButton='Login' linkButton='/login' />
      <SecBanner />
      <Main>
       <SecItens categoria='Star Wars' listaDeProdutos={starwars} />
       <SecItens categoria='Consoles' listaDeProdutos={consoles} />
       <SecItens categoria='Diversos' listaDeProdutos={misc} />
      </Main>
    </>
  )
}

export default Home;
