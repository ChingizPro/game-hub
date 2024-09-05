import { Image, ImageProps } from '@chakra-ui/react';
import bullsEye from '../assets/bulls-eye.webp';
import thumsUp from '../assets/thumbs-up.webp';
import meh from '../assets/meh.webp';

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    5: { src: bullsEye, alt: 'recommended', boxSize: '40px' },
    4: { src: thumsUp, alt: 'exceptional', boxSize: '32px' },
    3: { src: meh, alt: 'meh', boxSize: '32px' },
  };
  
  return <Image marginTop='5px' {...emojiMap[rating]} />;
};

export default Emoji;