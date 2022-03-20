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
`

export const ListLink = styled.menu`
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
`

export const Link = styled.li`
    list-style: none;
    font-family: 'Raleway';
    font-weight: 500;
    color: #464646;
`

export const Form = styled.form`

`

export const Fieldset = styled.fieldset`
    border: none;
`

export const Legend = styled.legend`
    font-family: 'Raleway';
    font-weight: 700;
    color: #464646;
`

export const Label = styled.label`
    font-family: 'Raleway';
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
    width: 560px;
    height: 56px;
    background: #FFFFFF;
    border-radius: 4px;
    border: none;
    padding: 1.5rem 1rem .25rem;
    font-family: 'Raleway';
    font-weight: 400;
    color: #464646;
    box-shadow: 0 1px 0 0 #C8C8C8;
    `

export const TextArea = styled.textarea`
    width: 560px;
    height: 82px;
    background: #FFFFFF;
    border-radius: 4px;
    font-family: 'Raleway';
    font-weight: 400;
    color: #464646;
    padding: 1rem;
    border: none;
    margin: .5rem 0;
    box-shadow: 0 1px 0 0 #C8C8C8;
`

export const FooterCopyright = styled.section`
    padding: 2rem 0;
`

export const TextCopyright = styled.p`
    font-family: 'Raleway';
    font-weight: 500;
    text-align: center;
`