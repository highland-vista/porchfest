import { Button, Heading, Box, Text, Image } from '@chakra-ui/react';
import { NavLink, Routes, Route } from 'react-router-dom';

import PorchDetails from '../components/PorchDetails';

import map from '../img/map.jpg';
import porchConfig from '../config/porchConfig';

const Porches = () => {
  return (
    <Box bg={'#fff'} p={['1rem', '2rem']} flexGrow={1}>
      <Heading
        color={'brand.red'}
        size="2xl"
        textAlign={'center'}
        mt="0"
        mb={['1rem', '2rem']}
      >
        PORCH LINEUPS
      </Heading>
      <Box position={'relative'}>
        <Image
          src={map}
          alt="Map of porches"
          border={'1px'}
          borderColor={'brand.darkblue'}
        />
        {porchConfig.map((porch) => {
          return (
            <Button
              key={porch.id}
              as={NavLink}
              to={porch.to}
              position={'absolute'}
              top={porch.position.top}
              left={porch.position.left}
              w="15%"
              h="15%"
              bg={'transparent'}
              _hover={{ bg: 'transparent', filter: 'brightness(0.8)' }}
              _active={{ bg: 'transparent' }}
            >
              {/* <Image src={porch.image} alt={porch.alt} /> */}
            </Button>
          );
        })}
      </Box>
      <Text
        color={'brand.darkblue'}
        textAlign="center"
        fontWeight={700}
        mt=".5rem"
        fontSize={'sm'}
      >
        RESTROOMS ARE AVAILABLE AT THE HIGHLAND VISTA POOL
      </Text>
      <Routes>
        <Route
          path=":porchNum"
          element={<PorchDetails porchConfig={porchConfig} />}
        />
      </Routes>
    </Box>
  );
};

export default Porches;
