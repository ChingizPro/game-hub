import { Card, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={game.background_image} alt='game-poster' />
      <Heading fontSize={'3xl'}>{game.name}</Heading>
    </Card>
  );
};

export default GameCard;
