import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? 'green' : 'yellow';

  return (
    <Badge colorScheme={color} fontSize='sm'>
      {score}
    </Badge>
  );
};

export default CriticScore;
