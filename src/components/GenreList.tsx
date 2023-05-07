import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getOptimizedImage from '../services/image-url';

interface Props {
  onSelectGenre: (genreId: number) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data } = useGenres();
  return (
    <>
      <Heading fontSize='3xl' marginY={5}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={1.5}>
            <HStack>
              <Image
                src={getOptimizedImage(genre.image_background)}
                boxSize={8}
                borderRadius={8}
                objectFit='cover'
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                fontSize='lg'
                whiteSpace='normal'
                textAlign='left'
                variant='link'
                onClick={() => onSelectGenre(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
