import Link from 'next/link';
import { Button } from './style';

type Props = {
    children: string,
    link: string
}

const ButtonBlue = ({link, children}: Props) => {
  return (
    <>
      <Link href={link} passHref>
        <Button >{children}</Button>
      </Link>
    </>
  )
}

export default ButtonBlue;