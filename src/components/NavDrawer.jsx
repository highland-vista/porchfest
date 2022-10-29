import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  Box,
  Image,
} from '@chakra-ui/react';

import lineup from '../img/lineup.svg';
import food from '../img/food.svg';
import map from '../img/map.svg';
import logo from '../img/logo.svg';

import { NavLink } from 'react-router-dom';

import NavDrawerLink from './NavDrawerLink';

const NavDrawer = ({ onClose, isOpen }) => {
  return (
    <Drawer size={'xs'} placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent bg="brand.darkblue" color="#fff">
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">
          <Box as={NavLink} to="/" w={'200px'} onClick={onClose}>
            <Image
              src={logo}
              alt="Highland Vista Cinco Via Porchfest 2022"
              w={'200px'}
            />
          </Box>
        </DrawerHeader>
        <DrawerBody>
          <NavDrawerLink
            to="/porches"
            linkText={'PORCHES'}
            alt={'Link to porches information'}
            imgSrc={lineup}
            onClick={onClose}
          />
          <NavDrawerLink
            to="/food"
            linkText={'FOOD'}
            alt={'Link to food truck information'}
            imgSrc={food}
            onClick={onClose}
          />
          <NavDrawerLink
            to="/map"
            linkText={'MAP'}
            alt={'Link to map'}
            imgSrc={map}
            onClick={onClose}
          />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default NavDrawer;
