import usePlatforms from './usePlatforms';

const usePlatform = (id?: number) => {
  const { data } = usePlatforms();
  return data.results.find((p) => p.id === id);
};

export default usePlatform;