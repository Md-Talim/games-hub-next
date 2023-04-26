import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        type='text'
        variant='filled'
        borderRadius={20}
        placeholder='Search games..'
      />
    </InputGroup>
  );
};

export default SearchInput;
