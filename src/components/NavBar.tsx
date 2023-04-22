import { HStack, Image } from '@chakra-ui/react';
import { logo } from '../assets';
import ColorModeSwith from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="1rem">
      <Image src={logo} boxSize={'60px'} />
      <ColorModeSwith />
    </HStack>
  );
};

export default NavBar;
