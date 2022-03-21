import Link from 'next/link';
import { CardItem, Image, NameProduct, Price, ProductPage } from './style';

type Props = {
  id: number,
  image: string,
  price: number,
  name: string,
}

const Card = ({id, image, price, name}: Props) => {
  return (
    <>
        <CardItem key={id}>
            <Image src={image} alt={name} />
            <NameProduct>{name}</NameProduct>
            <Price>R$ {price}</Price>
            <Link href="product/id" passHref>
                <ProductPage>Ver produto</ProductPage>
            </Link>
        </CardItem>
    </>
  )
}

export default Card;