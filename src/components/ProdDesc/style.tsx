import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    width: calc(100% - 4rem);
    max-width: 70rem;
    gap: 1rem;
    flex: 1;
    align-items: center;
`

export const Article = styled.article`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .5rem;
    flex: 1;
`

export const Title = styled.h1`
    font-weight: 500;
    font-size: 52px;
    color: #464646;
`
export const Price = styled.p`
    font-weight: 700;
    color: #464646;
`
export const Description = styled.p`
    font-weight: 400;
    line-height: 19px;
    color: #464646;

`

export const Img = styled.img`
    width: 560px;
    height: 403px;
    object-fit: cover;
    transition: ease .2s;

    &:hover {
        transform: scale(1.05);
    }
`