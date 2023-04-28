import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { platform, genre } = gameQuery;
  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize={{ base: '3xl', md: '5xl' }}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
