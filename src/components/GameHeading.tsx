import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  let genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  let selectedPlatform = platforms.results.find(
    (p) => p.id === gameQuery.platformId
  );

  let heading = `${selectedPlatform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading fontSize='44px' as='h1' marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
