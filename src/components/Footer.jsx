import { Box, Flex, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="brand.darkblue" padding="20px" color="white">
      <Flex
        justifyContent={'center'}
        // flexDir="column"
        flexWrap={'wrap'}
        fontWeight={500}
      >
        <Flex justifyContent={'center'} gap="5px" maxW={'fit-content'} mr="5px">
          <Text as="span" color="brand.red">
            N
          </Text>
          of Broadway
          <Text as="span" color="brand.yellow">
            //
          </Text>
          <Text as="span" color="brand.red">
            S
          </Text>
          of 5th St
          <Text as="span" color="brand.yellow">
            //
          </Text>
        </Flex>
        <Flex justifyContent={'center'} gap="5px" maxW={'fit-content'}>
          <Text as="span" color="brand.red">
            E
          </Text>
          of Rosemont
          <Text as="span" color="brand.yellow">
            //
          </Text>
          <Text as="span" color="brand.red">
            W
          </Text>
          of Craycroft
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
