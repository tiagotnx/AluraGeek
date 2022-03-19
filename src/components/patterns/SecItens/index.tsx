import Link from 'next/link';
import Card from '../../Card';
import { Section, Header, Title, Seta, LinkA, List } from './style';

type Props = {
    titleSection: string,
    linkAll: string,
}

const SecItens = ({titleSection, linkAll}: Props) => {
  return (
    <>
        <Section>
            <Header>
                <Title>{titleSection}</Title>
                    <Link href={linkAll} passHref>
                        <LinkA>Ver tudo
                            <Seta src='/images/seta.svg'/>
                        </LinkA>
                    </Link>
            </Header>
            <List>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </List>
        </Section>
    </>
  )
}

export default SecItens;