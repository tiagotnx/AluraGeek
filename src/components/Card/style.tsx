import styled from 'styled-components'

export const CardItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 16%;
    margin-top: 1rem;
    transition: .2s ease;

    &:hover {
        transform: scale(1.1);
    }

    @media only screen and (max-width: 1024px) {
       & {
          width: 24%;
        }
      }
`

export const Image = styled.img`
    width: 100%;
    height: 10.875rem;
    object-fit: cover;
`

export const NameProduct = styled.h4`
    font-weight: 500;
    font-size: .875rem;
    color: #464646;
    flex: 1;
`

export const Price = styled.p`
    font-weight: 700;
    color: #464646;
`
export const ProductPage = styled.a`
    font-weight: 700;
    color: #2A7AE4;
    text-decoration: none;
`