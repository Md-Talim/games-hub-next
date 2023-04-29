import { Image, ImageProps } from '@chakra-ui/react';
import { bullsEye, thumbsUp, meh } from '../assets';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const imageProps: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh', boxSize: 10 },
    4: { src: thumbsUp, alt: 'recommended', boxSize: 10 },
    5: { src: bullsEye, alt: 'exeptional', boxSize: 14 },
  };
  return <Image {...imageProps[rating]} />;
};

export default Emoji;
