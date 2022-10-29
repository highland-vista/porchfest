import { Box, Grid, Image } from '@chakra-ui/react';
import GraphicLink from '../components/GraphicLink';

import maskGroup from '../img/mask-group.svg';
import welcomeText from '../img/welcome-text.svg';
import lineup from '../img/lineup.svg';
import food from '../img/food.svg';
import map from '../img/map.svg';

const Main = () => {
  return (
    <Box>
      <Image src={maskGroup} w="100%" />
      <Box p="2rem" m="2rem" bg="#fff" h="100%">
        <Image src={welcomeText} w="100%" mb="2rem" />
        <Grid templateColumns={'45% 10% 45%'} mb="3rem">
          <GraphicLink
            src={lineup}
            alt="Porch band lineups"
            link="/porches"
            text="LINEUP"
          />
          <Box />
          <GraphicLink
            src={food}
            alt="Food truck info"
            link="/food"
            text="FOOD"
          />
        </Grid>
        <Grid templateColumns={'1fr 45% 1fr'}>
          <Box />
          <GraphicLink src={map} alt="Map" link="/map" text="MAP" />
          <Box />
        </Grid>
      </Box>
    </Box>
  );
};

export default Main;
