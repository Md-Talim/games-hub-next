import useTrailers from '../hooks/useTrailers';

interface Props {
  slug: string;
}

const GameTrailer = ({ slug }: Props) => {
  const { data, isLoading, error } = useTrailers(slug);

  if (isLoading) return null;

  if (error) throw error;

  const trailer = data?.results[0];

  return trailer ? (
    <video src={trailer.data[480]} poster={trailer.preview} controls />
  ) : null;
};

export default GameTrailer;
