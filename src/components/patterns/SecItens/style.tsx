import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    alight-itens: center;
`

export const Title = styled.h3`
    font-weight: 700;
    font-size: 2rem;
    color: #464646;
`

export const LinkA = styled.a`
    text-decoration: none;
    font-weight: 700;
    color: #2A7AE4;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Seta = styled.span`
    background-image: url("/images/seta.svg");
    width: 1rem;
    height: 1rem;
    margin-left: .5rem;
    
`

export const List = styled.ul`
    list-style: none;
    display: flex;
    gap: 1rem;


    @media only screen and (max-width: 1024px) {
        li:last-child {
            display: none;
        }
    
        li:nth-child(5) {
            display: none;
        }
    }

`