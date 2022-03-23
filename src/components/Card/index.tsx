import Image from 'next/image';
import Link from 'next/link';
import { CardItem, NameProduct, Price, ProductPage } from './style';

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
            <Image src={image} alt={name} width="100%" height="176px" />
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