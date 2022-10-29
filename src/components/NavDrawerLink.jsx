import { NavLink } from 'react-router-dom';
import { Box, Link, Image } from '@chakra-ui/react';

const NavDrawerLink = ({ imgSrc, alt, linkText, to, onClick }) => {
  return (
    <Box my={'2rem'}>
      <Link
        as={NavLink}
        to={to}
        display={'flex'}
        alignItems={'center'}
        gap={'10px'}
        fontSize={'30px'}
        onClick={onClick}
      >
        <Image src={imgSrc} alt={alt} w={'20%'} />
        {linkText}
      </Link>
    </Box>
  );
};

export default NavDrawerLink;
