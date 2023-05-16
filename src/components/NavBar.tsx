import { HStack, Image } from '@chakra-ui/react';
import { logo } from '../assets';
import ColorModeSwith from './ColorModeSwitch';
import SearchInput from './SearchInput';


const NavBar = () => {
  return (
    <HStack padding='1rem'>
      <Image src={logo} boxSize={'60px'} />
      <SearchInput />
      <ColorModeSwith />
    </HStack>
  );
};

export default NavBar;
