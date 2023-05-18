import { Box, Heading, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
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
      <Text dangerouslySetInnerHTML={{ __html: game.description }}></Text>
    </Box>
  );
};

export default GameDetail;
