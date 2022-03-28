import Link from 'next/link';
import Card from '../../Card';
import { Header, LinkA, List, Section, Seta, Title } from './style';

type ProductProps = {
    listaDeProdutos: Array<{ name: string; price: number; image: string; id: number; description: string; category: string; pathname: string }>;
    categoria: string;
};


const SecItens = ({ listaDeProdutos, categoria }: ProductProps) => {
    return (
        <>
            <Section>
                <Header>
                    <Title>{ categoria }</Title>
                    <Link href={`/${categoria}`} passHref>
                        <LinkA>Ver tudo
                            <Seta />
                        </LinkA>
                    </Link>
                </Header>
                <List>
                    {listaDeProdutos.map((product) => (
                        <Card
                            key={product['id']}
                            image={product['image']}
                            price={product['price']}
                            name={product['name']}
                            id={product['id']}
                            title={product['pathname']}
                        />
                    ))}
                </List>
            </Section>
        </>
    )
}


export default SecItens;

