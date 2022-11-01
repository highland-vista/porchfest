import { Box, Grid, Image } from '@chakra-ui/react';
import GraphicLink from '../components/GraphicLink';

import pattern from '../img/pattern.png';
import welcomeText from '../img/welcome.png';
import lineup from '../img/lineup.svg';
import food from '../img/food.svg';

const Main = () => {
  return (
    <Box flexGrow={1} display="flex" flexDirection={'column'}>
      <Image src={pattern} w="100%" />
      <Box p={['1rem', '2rem']} bg="#fff" flexGrow={1}>
        <Image src={welcomeText} w="100%" mb="2rem" />
        <Grid templateColumns={'45% 10% 45%'}>
          <GraphicLink
            src={lineup}
            alt="Porch band lineups"
            link="/porches"
            text="PORCHES"
          />
          <Box />
          <GraphicLink
            src={food}
            alt="Food truck info"
            link="/food"
            text="FOOD"
          />
        </Grid>
      </Box>
    </Box>
  );
};

export default Main;
