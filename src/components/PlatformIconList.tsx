import { Text } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  console.log(platforms);

  return (
    <>
      {platforms.map(platform => <Text key={platform.id}>{platform.name}</Text>)}
    </>
  );
};

export default PlatformIconList;
