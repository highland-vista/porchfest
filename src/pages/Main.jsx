import { Box, Heading, Container } from '@chakra-ui/react';
import Lorem from '../components/Lorem';

const Main = () => {
  return (
    <Box bg="blue.300">
      <Container>
        <Heading mb="20px">This Is The Main Page</Heading>
        <Lorem />
      </Container>
    </Box>
  );
};

export default Main;
