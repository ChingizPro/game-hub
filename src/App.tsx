import { Box, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: `1fr`,
        lg: `220px 1fr`,
      }}
      paddingX={5}
    >
      <GridItem paddingY={3} area='nav'>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area='aside'>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <Box marginX={4}>
          <PlatformSelector />
        </Box>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
};

export default App;
