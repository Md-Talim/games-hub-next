import { Grid, GridItem } from '@chakra-ui/layout';
import { Show } from '@chakra-ui/media-query';
import { Flex } from '@chakra-ui/react';
import {
  GameGrid,
  GameHeading,
  GenreList,
  NavBar,
  PlatformSelector,
  SortSelector,
} from './components';

function App() {
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
          <NavBar />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' paddingX={8}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area='main' paddingX={5}>
          <GameHeading />
          <Flex marginBottom={5} gap={5}>
            <PlatformSelector />
            <SortSelector />
          </Flex>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
