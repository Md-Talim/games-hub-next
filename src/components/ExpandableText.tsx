import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  text: string;
}

const ExpandableText = ({ text }: Props) => {
  const [expanded, setExpanded] = useState(false);

  if (!text) return null;

  const limit = 300;
  const summary = expanded ? text : text.substring(0, limit) + '...';

  return (
    <>
      <Text dangerouslySetInnerHTML={{ __html: summary }}></Text>
      <Button
        onClick={() => setExpanded(!expanded)}
        size='xs'
        colorScheme='cyan'
      >
        {expanded ? 'Read less' : 'Show more'}
      </Button>
    </>
  );
};

export default ExpandableText;
