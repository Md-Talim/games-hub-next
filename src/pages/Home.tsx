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
      <Show above="lg">
        <GridItem area="aside" paddingX={8} maxHeight="92vh" overflowY="scroll">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem maxHeight="92vh" overflowY="scroll" area="main" paddingX={5}>
        <GameHeading />
        <Flex marginBottom={5} paddingX={5} gap={5}>
          <PlatformSelector />
          <SortSelector />
        </Flex>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default Home;
