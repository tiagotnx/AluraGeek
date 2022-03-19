import { Icon, Input, SearchBar } from './style';

const TextInput = () => {
  return (
    <>
        <SearchBar>
          <Input placeholder="O que deseja encontrar?"/>
            <Icon src="/images/lupa.svg" alt='botão para pesquisa'/>
        </SearchBar>
    </>
  )
}

export default TextInput;