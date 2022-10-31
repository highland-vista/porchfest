import {
  extendTheme,
  ChakraProvider,
  Container,
  Flex,
  Box,
} from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Porches from './pages/Porches';
import Food from './pages/Food';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';

const colors = {
  brand: {
    background: '#FFF0CF',
    darkblue: '#2B215E',
    yellow: '#F0C807',
    red: '#F04770',
    redHover: '#ED1D51',
    gray: '#F5F5F5',
    text: '#2B215E',
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container minHeight="100vh" padding="0">
        <Flex height="100%" minHeight="100vh" direction="column">
          <Navbar />
          <Box as="main" flexGrow={1} color="brand.text" display={'flex'}>
            <Routes>
              <Route path="" element={<Main />} />
              <Route path="porches/*" element={<Porches />} />
              <Route path="food" element={<Food />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
          <Footer />
        </Flex>
      </Container>
    </ChakraProvider>
  );
}

export default App;
