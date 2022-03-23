import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-itens: center;
    width: calc(100% - 4rem);
    max-width: 70rem;
    margin: 0 auto;
    background: #E5E5E5;
    min-height: calc(100vh - 585px);


    @media only screen and (max-width: 1024px) {
        & {
            min-height: calc(100vh - 542px);
         }
       }
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
    margin: 2rem auto;

`

export const Title = styled.legend`
    font-weight: 700;
    font-size: 1.125rem;
    color: #464646;
`

export const InputText = styled.input`
    width: clamp(17.1875rem, 50% + 1rem, 26.4375rem);
    height: 3.95rem;
    border: none;
    background: #FFFFFF;
    border-radius: 4px;
    font-weight: 400;
    color: #464646;
    box-shadow: 0 1px 0 0 #C8C8C8;
    padding: 12px;
    font-family: 'Raleway', sans-serif;
    font: inherit;
`

export const Button = styled.button`
    font-family: 'Raleway', sans-serif;
    width: clamp(6.8125rem, 28vw + 1.5rem, 26.4375rem);
    height: 3.95rem;
    border: none;
    background: #2A7AE4    ;
    font-weight: 400;
    color: #FFF;
    transition: 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.125rem;

    &:hover {
        background: #5595E9;
    }
`