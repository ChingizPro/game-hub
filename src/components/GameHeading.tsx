import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  let genre = useGenre(gameQuery.genreId);
  let platform = usePlatform(gameQuery.platformId);

  let heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading fontSize='44px' as='h1' marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
