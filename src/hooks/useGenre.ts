import useGenres from './useGenres';

const useGenre = (id?: number) => {
  const { data: genres } = useGenres();
  let genre = genres?.results.find((g) => g.id === id);
  return genre;
};

export default useGenre;