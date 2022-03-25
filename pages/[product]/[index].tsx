import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../src/components/patterns/Header';
import SecProd from '../../src/components/patterns/SecProd';
import category from '../../public/ListOfProducts/products.json';
import { useRouter } from 'next/router';


const Login: NextPage = () => {
    const id = Number(useRouter().query.index);
    const categoria = useRouter().query.product;
    
    return (
        <>
            <Head>
                <title>AluraGeek - </title>
            </Head>
            <Header textButton='Login' linkButton='/login' />
            {category.categories.map((category, index) => (category.pathname === categoria ? <SecProd key={index} title='Produtos similares' categoryLinkHref={category.pathname} products={category.products} id={id} /> : null))}
        </>
    )
}

export default Login;