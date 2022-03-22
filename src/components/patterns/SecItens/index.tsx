import Link from 'next/link';
import { useEffect, useState } from 'react';
import Card from '../../Card';
import { Header, LinkA, List, Section, Seta, Title } from './style';

type ProductProps = {
    title: string;
    categoryLinkHref: string;
    products: {
        name: string;
        price: number;
        description: string;
        image: string;
    }[];
};


const SecItens = ({ title, categoryLinkHref, products }: ProductProps) => {
    function useWindowSize(handler?: () => any) {
        const [windowSize, setWindowSize] = useState<number | null>(null);

        useEffect(() => {
            setWindowSize(window.innerWidth);

            function resizeListener() {
                setWindowSize(window.innerWidth);
                if (handler) handler();
            }

            window.addEventListener("resize", resizeListener);

            return () => {
                window.removeEventListener("resize", resizeListener);
            };
        }, [handler]);

        return windowSize as number;
    }

    const windowSize = useWindowSize();
    const numberOfProducts = windowSize < 1024 ? 4 : 6;

    return (
        <>
            <Section>
                <Header>
                    <Title>{title}</Title>
                    <Link href={categoryLinkHref} passHref>
                        <LinkA>Ver tudo
                            <Seta src='/images/seta.svg' alt='arrow right' />
                        </LinkA>
                    </Link>
                </Header>
                <List>
                    {products.slice(0, numberOfProducts).map((product, index) => (
                        <Card
                            key={index}
                            image={product.image}
                            price={product.price}
                            name={product.name}
                            id={index}
                            title={categoryLinkHref}
                        />
                    ))}
                </List>
            </Section>
        </>
    )
}

export default SecItens;

