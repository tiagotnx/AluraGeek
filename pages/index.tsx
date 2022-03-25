import type { NextPage } from 'next';
import Head from 'next/head';
import SecBanner from '../src/components/patterns/Banner';
import Footer from '../src/components/patterns/Footer';
import Header from '../src/components/patterns/Header';
import SecItens from '../src/components/patterns/SecItens';
import { Main } from '../styles/styles';
import category from '../public/ListOfProducts/products.json'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AluraGeek - Página inicial</title>
      </Head>
      <Header textButton='Login' linkButton='/login' />
      <SecBanner />
      <Main>
        {category.categories.map((category, index) => (
          <SecItens
            key={index}
            title={category.category}
            categoryLinkHref={category.pathname}
            products={category.products}
          />
        ))}
      </Main>
    </>
  )
}

export default Home;
