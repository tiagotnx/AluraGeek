import styled from 'styled-components'

export const Banner = styled.section`
    height: 22rem;
    width: 100vw;
    background-image: url("/images/banner-image.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    padding: 0 0 2rem 0;
    `

export const TitleBanner = styled.h2`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 3.25rem;
    color: #FFFFFF;
`

export const SubTitle = styled.h3`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 1.375rem;
    color: #FFFFFF;
    margin: 1rem 0;
`

export const TextBanner = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 4rem);
    max-width: 70rem;
    justify-content: flex-end;
    margin: 0 auto;
`