import { Grid, GridItem } from '@chakra-ui/layout';
import { Show } from '@chakra-ui/media-query';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';
import { HStack } from '@chakra-ui/react';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [order, setOrder] = useState<string>('');

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr',
        }}
      >
        <GridItem area='nav'>
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' paddingX={5}>
            <GenreList
              onSelectItem={(genre) => setSelectedGenre(genre)}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem area='main' paddingX={5}>
          <HStack marginBottom={5}>
            <PlatformSelector
              onSelectPlatform={(platform) => setSelectedPlatform(platform)}
              selectedPlatform={selectedPlatform}
            />
            <SortSelector
              selectedItem={order}
              onSelectItem={(order) => setOrder(order)}
            />
          </HStack>
          <GameGrid
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
            selectedOrder={order}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
