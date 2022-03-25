import Image from 'next/image';
import { Article, Description, Img, Price, Section, Title } from './style';

type Props = {
    image: string,
    price: number,
    name: string,
    description: string,
    id: number
}

const SecDesc = ({ image, price, name, description, id }: Props) => {
    return (
        <>
            <Section>
                <Image src={image} width={560} height={403} objectFit="cover" quality={100} />
                <Article>
                    <Title>{name}</Title>
                    <Price>R$ {price}</Price>
                    <Description>{description} </Description>
                </Article>
            </Section>
        </>
    )
}

export default SecDesc;