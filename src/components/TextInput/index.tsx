import { Icon, Input, SearchBar, Button } from './style';

const TextInput = () => {
  const preventReload =  (event: any) => {
    event.preventDefault()
  }

  return (
    <>
        <SearchBar>
          <Input  type="search" placeholder="O que deseja encontrar?"/>
          <Button onClick={preventReload}>
            <Icon src="/images/lupa.svg" alt='botão para pesquisa'/>
          </Button>
        </SearchBar>
    </>
  )
}

export default TextInput;