import { Heading } from '@chakra-ui/react';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';
import useGameQueryStore from '../store';

const GameHeading = () => {
  const selectetPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectetGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

  let genre = useGenre(selectetGenreId);
  let platform = usePlatform(selectetPlatformId);

  let heading = `${platform?.name || ''} ${genre?.name || ''} Games`;
  return (
    <Heading fontSize='44px' as='h1' marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;