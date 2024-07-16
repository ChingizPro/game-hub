import { Card, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={game.background_image} alt='game-poster' />
      <Heading fontSize={'3xl'}>{game.name}</Heading>
      <PlatformIconList
        platforms={game.parent_platforms.map((p) => p.platform)}
      />
    </Card>
  );
};

export default GameCard;
