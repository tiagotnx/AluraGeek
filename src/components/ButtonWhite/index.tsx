import Link from 'next/link';
import { Button } from './style';

type Props = {
    children: string,
    link: string
}

const ButtonWhite = ({link, children}: Props) => {
  return (
    <>
      <Link href={link} passHref>
        <Button >{children}</Button>
      </Link>
    </>
  )
}

export default ButtonWhite;