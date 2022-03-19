import Link from 'next/link';
import { CardItem, Image, NameProduct, Price, ProductPage } from './style';

const Card = () => {
  return (
    <>
        <CardItem>
            <Image src='./images/unsplash_6FDXGY9J6y4.webp' alt='Caneca Star Wars' />
            <NameProduct>Produto XYZ</NameProduct>
            <Price>R$ 60,00</Price>
            <Link href="/product/id" passHref>
                <ProductPage>Ver produto</ProductPage>
            </Link>
        </CardItem>
    </>
  )
}

export default Card;