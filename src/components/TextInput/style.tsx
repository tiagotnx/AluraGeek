import styled from 'styled-components'

export const SearchBar = styled.form`
    display: flex;
    align-items: center;
    position: relative;
    `

export const Input = styled.input`
    display: flex;
    padding: .5rem 1rem;
    width: clamp(17rem, 35vw + 1rem, 24.5625rem);
    height: 2.5rem;
    background: #F5F5F5;
    border-radius: 1.25rem;
    margin: 0 0 0 2rem;
    border: none;
    color: #A2A2A2;
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
    position: absolute;
    right: .75rem;
`