import { Main } from './style';
import SecItens from '../SecItens';
import SecDesc from '../../ProdDesc';

type ProductProps = {
    id: number;
    listaDeProdutos: Array<{ name: string; price: number; image: string; id: number; description: string; category: string; pathname: string }>;
    categoria: string;
};

const SecProd = ({ listaDeProdutos, id, categoria }: ProductProps) => {
    return (
        <>
            <Main>
                {listaDeProdutos.map( product => ( id === product['id'] ?
                    <SecDesc
                        key={product['id']}
                        image={product['image']}
                        price={product['price']}
                        name={product['name']}
                        description={product['description']}
                        id={product['id']}
                        />
                        : null
                ))}
                <SecItens
                    listaDeProdutos={listaDeProdutos}
                    categoria={categoria}
                />
            </Main>
        </>
    )
}

export default SecProd;