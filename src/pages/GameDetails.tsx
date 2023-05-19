import { Box, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { CriticScore, DefinitionItem, ExpandableText } from '../components';
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
    <Box padding={5}>
      <Heading>{game.name}</Heading>
      <ExpandableText text={game.description} />
      <SimpleGrid columns={2} maxWidth='5xl' marginX='auto'>
        <DefinitionItem term='Platforms'>
          {game.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term='Publishers'>
          {game.publishers.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term='Genres'>
          {game.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>
        <DefinitionItem term='Metacritic'>
          <CriticScore score={game.metacritic} />
        </DefinitionItem>
      </SimpleGrid>
    </Box>
  );
};

export default GameDetail;
