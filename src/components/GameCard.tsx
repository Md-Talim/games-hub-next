import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatfromIconList from './PlatfromIconList';
import CriticScore from './CriticScore';
import getOptimizedImage from '../services/image-url';
import Emoji from './Emoji';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getOptimizedImage(game.background_image)} />
      <CardBody>
        <HStack justifyContent='space-between' marginBottom={2}>
          <PlatfromIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize='2xl' marginBottom={2}>
          {game.name}
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
