import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../src/components/patterns/Header';
import SecProd from '../../src/components/patterns/SecProd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import supabase from '../api/supabase';


const Login: NextPage = () => {
    const id = Number(useRouter().query.index);
    const categoria: any = useRouter().query.product;

    const [listaDeProdutos, setListaDeProdutos] = useState([]);

    useEffect(() => {
        let Products = supabase
            .from('Products')
            .select('*')
            .match({ pathname: `${categoria}`})
            .then(({ data }: any) => {
                setListaDeProdutos(data);
                console.log('Dados da consulta:', data);
            })
    }, [categoria])

    return (
        <>  
            <Head>
                <title>AluraGeek - </title>
            </Head>
            <Header textButton='Login' linkButton='/login' />
            <SecProd listaDeProdutos={listaDeProdutos}
            id={id}
            categoria={categoria} />
        </>
    )
}
export default Login;