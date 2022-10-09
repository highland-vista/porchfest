import { Box, Flex } from '@chakra-ui/react';
import Navbar from './Navbar';
import Footer from './Footer';

const DisplayWrapper = (props) => {
  return (
    <Flex direction="column" height="100%">
      <Navbar />
      <Box as="main" flexGrow={1} bg="green.200">
        {props.children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default DisplayWrapper;
