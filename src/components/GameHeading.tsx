import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  let heading = `${gameQuery?.platform?.name || ''} ${
    gameQuery?.genre?.name || ''
  } Games`;
  return (
    <Heading fontSize='44px' as='h1' marginBottom={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
