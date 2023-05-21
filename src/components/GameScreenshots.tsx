import { Heading, Image, SimpleGrid } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots';

interface Props {
  id: number;
}

const GameScreenshots = ({ id }: Props) => {
  const { data, isLoading, error } = useScreenshots(id);

  if (isLoading) null;

  if (error) throw error;

  return (
    <>
      <Heading color='gray.500' marginBottom={5}>
        Screenshots
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: 2, md: 4 }}>
        {data?.results.map((screenshot) => (
          <Image key={screenshot.id} src={screenshot.image} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameScreenshots;
