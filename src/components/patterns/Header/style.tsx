import styled from 'styled-components'

export const HeaderW = styled.header`
    width: 100%;
    background: #FFFFFF;
`

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: calc(100% - 4rem);
    max-width: 70rem;
    height: 7.1875rem;
    margin: 0 auto;
    justify-content: space-between;

    @media only screen and (max-width: 1024px) {
        & {
            height: 72px;
         }
       }
    `

export const Logo = styled.img`
    width: clamp(6.25rem,11vw + 1rem, 11rem);;
    height: 3.125rem;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
`