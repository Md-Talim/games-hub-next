import { Box, Heading, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { ExpandableText, GameAttributes, GameTrailer } from '../components';
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
      <GameAttributes game={game} />
      <GameTrailer slug={game.slug} />
    </Box>
  );
};

export default GameDetail;
