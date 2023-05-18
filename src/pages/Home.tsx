import { Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import {
  GameGrid,
  GameHeading,
  GenreList,
  PlatformSelector,
  SortSelector,
} from '../components';

const Home = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr',
      }}
    >
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
  );
};

export default Home;
