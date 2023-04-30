import { useState } from 'react';
import { Grid, GridItem } from '@chakra-ui/layout';
import { Show } from '@chakra-ui/media-query';
import { Flex } from '@chakra-ui/react';
import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/useGames';
import {
  GameGrid,
  GameHeading,
  GenreList,
  NavBar,
  PlatformSelector,
  SortSelector,
} from './components';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '250px 1fr',
        }}
      >
        <GridItem area='nav'>
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' paddingX={8}>
            <GenreList
              onSelectItem={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area='main' paddingX={5}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={5} gap={5}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector
              selectedItem={gameQuery.sortOrder}
              onSelectItem={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
