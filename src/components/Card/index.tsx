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

const Card = ({ image, price, name, id, title }: Props) => {
  return (
    <>
      <CardItem>
        <Image src={image} alt={name} width="100%" height="174px" objectFit="cover" quality={100} />
        <NameProduct>{name}</NameProduct>
        <Price>R$ {price}</Price>
        <Link href={{
        pathname: '/[title]/[id]',
        query: { title: `${title}`, id: `${id}` },
      }} passHref>
          <ProductPage>Ver produto</ProductPage>
        </Link>
      </CardItem>
    </>
  )
}

export default Card;