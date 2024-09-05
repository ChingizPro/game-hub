import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  const skelets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <>
      <Heading fontSize='27px' marginBottom='7px'>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skelets.map((skelet) => (
            <Skeleton marginY={4} key={skelet} height='40px'>
              <SkeletonText />
            </Skeleton>
          ))}
        {data?.results.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY='5px'>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize='43px'
                objectFit='cover'
                alt='genre pic'
                borderRadius='5px'
              />
              <Button
                fontWeight={selectedGenreId === genre.id ? 'bold' : 'normal'}
                textAlign='left'
                whiteSpace='normal'
                onClick={() => setGenreId(genre.id)}
                variant='link'
                fontSize='lg'
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;