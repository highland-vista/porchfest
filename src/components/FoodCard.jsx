import { Box, Heading, HStack, IconButton, Link } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const FoodCard = ({ name, link }) => {
  return (
    <Box bg={'brand.gray'} p={['1rem', '2rem']} borderRadius={'lg'} mt="1rem">
      <HStack spacing="0.5rem" mt="0.5rem" align={'center'}>
        <Heading
          color={'brand.darkblue'}
          size={['md', 'lg']}
          textAlign={'left'}
          flex="auto"
        >
          {name}
        </Heading>
        {link.facebook ? (
          <IconButton
            color={'brand.red'}
            icon={<FaFacebook />}
            _hover={{ bg: 'transparent' }}
            _active={{ bg: 'transparent' }}
            bg="transparent"
            p="0"
            fontSize={'2xl'}
            as={Link}
            href={link.facebook}
          />
        ) : null}
        {link.twitter ? (
          <IconButton
            color={'brand.red'}
            icon={<FaTwitter />}
            _hover={{ bg: 'transparent' }}
            bg="transparent"
            p="0"
            fontSize={'2xl'}
            as={Link}
            href={link.twitter}
          />
        ) : null}
        {link.instagram ? (
          <IconButton
            color={'brand.red'}
            icon={<FaInstagram />}
            _hover={{ bg: 'transparent' }}
            bg="transparent"
            p="0"
            fontSize={'2xl'}
            as={Link}
            href={link.instagram}
          />
        ) : null}
        {link.youtube ? (
          <IconButton
            color={'brand.red'}
            icon={<FaYoutube />}
            _hover={{ bg: 'transparent' }}
            bg="transparent"
            p="0"
            fontSize={'2xl'}
            as={Link}
            href={link.youtube}
          />
        ) : null}
        {link.website ? (
          <Link
            fontWeight={700}
            fontSize={['md', 'lg']}
            href={link.website}
            color={'brand.red'}
            paddingLeft="0.5rem"
          >
            Website
          </Link>
        ) : null}
      </HStack>
    </Box>
  );
};

export default FoodCard;
