import { Box, Button, Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const GraphicLink = ({ src, alt, link, text }) => {
  return (
    <Box>
      <Box as={NavLink} to={link}>
        <Image
          src={src}
          alt={alt}
          mb="2rem"
          px="1rem"
          transition={'.2s all ease'}
          _hover={{ filter: 'brightness(85%)' }}
        />
      </Box>
      <Button
        bg="brand.red"
        color="white"
        as={NavLink}
        to={link}
        w="100%"
        _hover={{ bg: 'brand.redHover' }}
      >
        {text}
      </Button>
    </Box>
  );
};

export default GraphicLink;
