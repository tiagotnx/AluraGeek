import styled from 'styled-components'

export const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 51px;
    font-family: 'Raleway';
    font-weight: 400;
    color: #FFFFFF;
    cursor: pointer;
    text-decoration: none;
    transition: 0.5s ease;
    background: #2A7AE4;

    &:hover {
        background: #5595E9;
    }
    `
export const ButtonForm = styled(Button)`
    width: 165px;
`