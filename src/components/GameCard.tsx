import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import getOptimizedImage from '../services/image-url';
import Game from '../types/Game';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatfromIconList from './PlatfromIconList';

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
          <Link to={'/games/' + game.slug}>{game.name}</Link>
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
