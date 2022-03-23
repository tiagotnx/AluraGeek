import styled from 'styled-components'

export const Button = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: clamp(10.375rem, 14vw + 1rem, 11.375rem);
    height: 3.1875rem;
    border: 1px solid #2A7AE4;
    font-weight: 400;
    color: #2A7AE4;
    cursor: pointer;
    text-decoration: none;
    transition: .5s ease;

    &:hover {
        background: #D4E4FA;
    }

    @media only screen and (max-width: 1024px) {
        & {
            height: 40px;
         }
       }
    `