import { Box, Heading, Divider, Text } from '@chakra-ui/react';
import FoodCard from '../components/FoodCard';

import { foodDetails } from '../config/porchConfig';

const Food = () => {
  return (
    <Box
      textAlign={'center'}
      fontSize="36px"
      p={['1rem', '2rem']}
      bg="#fff"
      flexGrow={1}
    >
      <Heading color={'brand.red'} size="2xl" textAlign={'center'} mt="0">
        FOOD TRUCKS
      </Heading>
      <Divider
        borderColor={'brand.yellow'}
        borderBottomWidth="3px"
        w="50%"
        m="1rem auto"
      />
      <Text
        textAlign={'center'}
        fontWeight="700"
        color={'brand.red'}
        fontSize="xl"
        mb={['1rem', '2rem']}
      >
        Available at Highland Vista Park
        <br />
        2pm - 5:30pm
      </Text>
      {foodDetails.map((foodTruck) => {
        return (
          <FoodCard
            key={foodTruck.name}
            name={foodTruck.name}
            link={foodTruck.link}
          />
        );
      })}
    </Box>
  );
};

export default Food;
