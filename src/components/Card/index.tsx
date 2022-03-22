import Link from 'next/link';
import { CardItem, Image, NameProduct, Price, ProductPage } from './style';

type Props = {
  image: string,
  price: number,
  name: string,
  id: number,
  title: string
}

const Card = ({ image, price, name, id, title}: Props) => {
  return (
    <>
        <CardItem>
            <Image src={image} alt={name} />
            <NameProduct>{name}</NameProduct>
            <Price>R$ {price}</Price>
            <Link href={`${title}/${id}`} passHref>
                <ProductPage>Ver produto</ProductPage>
            </Link>
        </CardItem>
    </>
  )
}

export default Card;