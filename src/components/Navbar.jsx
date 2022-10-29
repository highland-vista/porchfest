import { Image, Box, IconButton, useDisclosure } from '@chakra-ui/react';

import NavDrawer from './NavDrawer';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

import logo from '../img/logo.svg';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <NavDrawer onClose={onClose} isOpen={isOpen} />
      <nav>
        <Box as={NavLink} to="/" w="50%">
          <Image src={logo} alt="Highland Vista Cinco Via Porchfest 2022" />
        </Box>
        <Box h="80%">
          <IconButton
            colorScheme="brand.darkblue"
            aria-label="Open links drawer"
            icon={<HamburgerIcon />}
            onClick={onOpen}
            fontSize="40px"
            style={{ width: '60px', height: '60px' }}
          />
        </Box>
      </nav>
    </>
  );
};

export default Navbar;
