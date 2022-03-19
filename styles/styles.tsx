import styled from 'styled-components'

export const Banner = styled.div`
    height: 352px;
    width: 100vw;
    background-image: url("/images/banner-image.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-left: 10%;
    display: flex;
    `

export const TitleBanner = styled.h1`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 52px;
    color: #FFFFFF;
`

export const SubTitle = styled.h3`
    font-family: 'Raleway';
    font-weight: 700;
    font-size: 22px;
    color: #FFFFFF;
    margin: 16px 0;
`

export const TextBanner = styled.section`
    align-self: flex-end;
    margin: 0 0 32px 0;
`
