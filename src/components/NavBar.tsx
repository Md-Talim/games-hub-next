import { HStack, Image } from '@chakra-ui/react';
import { logo } from '../assets';
import ColorModeSwith from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <HStack padding='1rem'>
      <Link to='/'>
        <Image src={logo} boxSize={'60px'} objectFit='cover' />
      </Link>
      <SearchInput />
      <ColorModeSwith />
    </HStack>
  );
};

export default NavBar;
