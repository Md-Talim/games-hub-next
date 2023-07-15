import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      _hover={{
        transform: 'scale(1.02)',
        transition: 'transform 0.15s ease-in',
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
