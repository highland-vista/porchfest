import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Stage from './pages/Stage';
import NotFound from './pages/NotFound';
import DisplayWrapper from './components/DisplayWrapper';

import './App.css';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <DisplayWrapper>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/stages/:name" element={<Stage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </DisplayWrapper>
    </ChakraProvider>
  );
}

export default App;
