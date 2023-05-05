import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { Platform } from '../hooks/usePlatforms';

interface Props {
  platforms: Platform[];
}

const PlatfromIconList = ({ platforms = [] }: Props) => {
  const icons: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe,
  };

  return (
    <HStack marginY={2}>
      {platforms.map(({ id, slug }) => (
        <Icon key={id} as={icons[slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatfromIconList;
