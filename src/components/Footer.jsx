import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="brand.darkblue" padding="20px" color="white">
      <Text align="center" fontWeight={500}>
        <Text as="span" color="brand.red">
          N
        </Text>{' '}
        of Broadway{' '}
        <Text as="span" color="brand.yellow">
          //
        </Text>{' '}
        <Text as="span" color="brand.red">
          S
        </Text>{' '}
        of 5th St{' '}
        <Text as="span" color="brand.yellow">
          //
        </Text>{' '}
        <Text as="span" color="brand.red">
          E
        </Text>{' '}
        of Rosemont{' '}
        <Text as="span" color="brand.yellow">
          //
        </Text>{' '}
        <Text as="span" color="brand.red">
          W
        </Text>{' '}
        of Craycroft
      </Text>
    </Box>
  );
};

export default Footer;
