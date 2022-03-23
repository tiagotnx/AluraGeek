import styled from 'styled-components'

export const FooterSection = styled.footer``

export const FooterInfo = styled.section`
    display: flex;
    align-items: center;
    width: 100%;
    height: 23rem;
    background: #EAF2FD;
    margin: 0 auto;
    justify-content: space-between;
`

export const Container = styled.div`
    display: flex;
    width: calc(100% - 4rem);
    max-width: 70rem;
    justify-content: space-between;
    margin: 0 auto;
`

export const Logo = styled.img`
    width: 11rem;
    height: 3.125rem;
    margin-right: clamp(1.6875rem, 4vw + .5rem, 6.6875rem);

    @media only screen and (max-width: 1024px) {
        & {
            margin: 0 0 .5rem 0;
         }
       }

`

export const ListLink = styled.menu`
    display: flex;
    flex-direction: column;
    gap: 24px;    
`

export const Link = styled.li`
    list-style: none;
    font-weight: 500;
    color: #464646;
`

export const Form = styled.form`

`

export const Fieldset = styled.fieldset`
    border: none;
`

export const Legend = styled.legend`
    font-weight: 700;
    color: #464646;
`

export const Label = styled.label`
    font-weight: 400;
    font-size: 0.75rem;
    color: #A2A2A2;
    position: absolute;
    z-index: 1;
    top: .5rem;
    left: 1rem;
`

export const Div = styled.div`
    position: relative;
    margin: .5rem 0;
`

export const Input = styled.input`
    width: clamp(27rem, 48vw + 1rem, 35rem);
    height: 56px;
    background: #FFFFFF;
    border-radius: 4px;
    border: none;
    padding: 1.5rem 1rem .25rem;
    font-weight: 400;
    color: #464646;
    box-shadow: 0 1px 0 0 #C8C8C8;
    font: inherit;
    font-family: 'Raleway', sans-serif;
    `

export const TextArea = styled.textarea`
    width: clamp(27rem, 48vw + 1rem, 35rem);
    height: 82px;
    background: #FFFFFF;
    border-radius: 4px;
    font-weight: 400;
    color: #464646;
    padding: 1rem;
    border: none;
    margin: .5rem 0;
    box-shadow: 0 1px 0 0 #C8C8C8;
    font-family: 'Raleway', sans-serif;
    font: inherit;
    `

export const FooterCopyright = styled.section`
    padding: 2rem 0;
    width: 100%;
    background: #FFF;
`

export const TextCopyright = styled.p`
    font-weight: 500;
    text-align: center;
`

export const ContainerDiv = styled.div`
    display: flex;

    @media only screen and (max-width: 1024px) {
        & {
           flex-direction: column;
         }
       }
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 165px;
    height: 51px;
    font-weight: 400;
    color: #FFFFFF;
    cursor: pointer;
    text-decoration: none;
    transition: 0.5s ease;
    background: #2A7AE4;
    border: 1px solid #2A7AE4;
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;

    &:hover {
        background: #5595E9;
    }
    `