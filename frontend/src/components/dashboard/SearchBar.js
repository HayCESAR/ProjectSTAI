import {
    InputLeftAddon,
    InputGroup,
    Input,
} from '@chakra-ui/react'
import {
    FiSearch
} from 'react-icons/fi'
  
export const SearchBar = ()  => {

    return(
    <InputGroup ml={10}>
        <InputLeftAddon children={<FiSearch />} />
        <Input placeholder='Pesquisar' />
    </InputGroup>
    );
}