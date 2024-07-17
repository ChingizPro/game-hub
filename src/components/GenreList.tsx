import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  const skelets = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <List>
      {isLoading &&
        skelets.map((skelet) => (
          <Skeleton marginY={4} key={skelet} height='40px'>
            <SkeletonText />
          </Skeleton>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY='5px'>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize='45px'
              objectFit='cover'
              alt='genre pic'
              borderRadius='5px'
            />
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
