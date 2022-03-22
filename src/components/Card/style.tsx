import styled from 'styled-components'

export const CardItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 16%;
    margin-top: 1rem;

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
    font-family: 'Raleway';
    font-weight: 500;
    font-size: .875rem;
    color: #464646;
`

export const Price = styled.p`
    font-family: 'Raleway';
    font-weight: 700;
    color: #464646;
`
export const ProductPage = styled.a`
    font-family: 'Raleway';
    font-weight: 700;
    color: #2A7AE4;
    text-decoration: none;
`