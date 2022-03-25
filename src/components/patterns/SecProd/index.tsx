import { Main } from './style';
import SecItens from '../SecItens';
import SecDesc from '../../ProdDesc';

type ProductProps = {
    id: number;
    title: string;
    categoryLinkHref: string;
    products: {
        name: string;
        price: number;
        description: string;
        image: string;
        id: number;
    }[];
};

const SecProd = ({ title, categoryLinkHref, products, id }: ProductProps) => {
    return (
        <>
            <Main>
                {products.map((product, index) => ( id === product.id ?
                    <SecDesc
                        key={index}
                        image={product.image}
                        price={product.price}
                        name={product.name}
                        description={product.description}
                        id={index}
                        />
                        : null
                ))}
                <SecItens
                    key='1'
                    title={title}
                    categoryLinkHref={categoryLinkHref}
                    products={products}
                />
            </Main>
        </>
    )
}

export default SecProd;