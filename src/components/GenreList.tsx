import { Button, HStack, Image, List, ListItem } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getOptimizedImage from '../services/image-url';

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={1.5}>
          <HStack>
            <Image
              src={getOptimizedImage(genre.image_background)}
              boxSize={8}
              borderRadius={8}
              objectFit="cover"
            />
            <Button fontSize="lg" variant="link">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
