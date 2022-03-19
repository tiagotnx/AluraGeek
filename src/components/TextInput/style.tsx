import styled from 'styled-components'

export const SearchBar = styled.form`
    display: flex;
    align-items: center;
    padding: .5rem 1rem;
    width: clamp(17.5rem, 35vw + 1rem, 30rem);
    height: 2.5rem;
    background: #F5F5F5;
    border-radius: 1.25rem;
    margin: 0 0 0 2rem;
    `

export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    color: #A2A2A2;
    outline: 0;
    font-family: 'Raleway';
    font-weight: 400;
    font-size: 14px;
`

export const Icon = styled.img`
    cursor: pointer;
    width: 1.065rem;
    height: 1.065rem;
`

export const Button = styled.button`
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
`