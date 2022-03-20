import Link from 'next/link';
import { A, Text } from './style';

type Props = {
    href: string,
    children: string
}

const LinkP = ({ href, children }: Props) => {
    return (
        <>
            <Link href={href} passHref>
                <Text >
                    <A>{children}</A>
                </Text>
            </Link>
        </>
    )
}

export default LinkP;