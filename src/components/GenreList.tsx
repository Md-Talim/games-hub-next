import { Button, HStack, Image, List, ListItem } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getOptimizedImage from '../services/image-url';

interface Props {
  onSelectItem: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectItem, selectedGenre }: Props) => {
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
              objectFit='cover'
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
              fontSize='lg'
              variant='link'
              onClick={() => onSelectItem(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;