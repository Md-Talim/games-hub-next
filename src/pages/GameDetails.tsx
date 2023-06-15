import {
  Box,
  HStack,
  Heading,
  Link,
  SimpleGrid,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { ExpandableText, GameAttributes, GameTrailer } from '../components';
import GameScreenshots from '../components/GameScreenshots';
import useGame from '../hooks/useGame';

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading)
    return (
      <Box padding={5}>
        <Spinner />
      </Box>
    );

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5} padding={5}>
      <Box>
        <Heading>{game.name}</Heading>
        <ExpandableText text={game.description} />
        <GameAttributes game={game} />
        <Link href={game.website} isExternal>
          <HStack>
            <Text>Learn more</Text>
            <FaExternalLinkAlt />
          </HStack>
        </Link>
      </Box>
      <Box>
        <GameTrailer slug={game.slug} />
        <GameScreenshots id={game.id} />
      </Box>
    </SimpleGrid>
  );
};

export default GameDetail;
