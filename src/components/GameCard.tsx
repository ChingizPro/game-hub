import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt='game-poster'
      />
      <CardBody>
        {game.parent_platforms && (
          <HStack marginBottom={4} justifyContent={'space-between'}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        )}
        <Heading marginBottom={3} fontSize={'3xl'}>
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
