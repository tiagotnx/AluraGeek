import Link from 'next/link';
import Card from '../../Card';
import { Section, Header, Title, Seta, LinkA, List } from './style';

type Props = {
    titleSection: string,
    linkAll: string,
    products: any
}

export const getStaticProps = async () => {
    const API_URL =
        "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
    const res = await fetch(API_URL);
    const products = await res.json();

    return {
        props: {
            products
        },
    };
}


const SecItens = ({ titleSection, linkAll, products }: Props) => {
    return (
        <>
            <Section>
                <Header>
                    <Title>{titleSection}</Title>
                    <Link href={linkAll} passHref>
                        <LinkA>Ver tudo
                            <Seta src='/images/seta.svg' alt='arrow right' />
                        </LinkA>
                    </Link>
                </Header>
                <List>
                    {products.map((product: any) => {
                        <Card id={product.id} image={product.image} price={product.price} name={product.name} />
                    })}
                </List>
            </Section>
        </>
    )
}

export default SecItens;

