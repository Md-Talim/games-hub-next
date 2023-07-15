import { HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { logo } from '../assets';
import ColorModeSwith from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack maxHeight="8vh" padding="1rem">
      <Link to="/">
        <Image src={logo} boxSize={'60px'} objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeSwith />
    </HStack>
  );
};

export default NavBar;
