import { useParams } from 'react-router-dom';

import { Box, Heading, Text } from '@chakra-ui/react';
import Card from '../components/Card';

const PorchDetails = ({ porchConfig }) => {
  const params = useParams();
  const info = porchConfig[params.porchNum - 1];
  return (
    <Box>
      <Heading
        color="brand.red"
        fontWeight={700}
        size="lg"
        textAlign={'center'}
        mt="1rem"
      >
        PORCH #{params.porchNum}
      </Heading>
      <Heading
        color={'brand.darkblue'}
        size="2xl"
        textAlign={'center'}
        mb="1rem"
      >
        {info.name}
      </Heading>
      {info.bands.map((band) => {
        return (
          <Card
            key={band.name}
            name={band.name}
            time={band.time}
            link={band.link}
            desc={band.desc}
          />
        );
      })}
    </Box>
  );
};
export default PorchDetails;
