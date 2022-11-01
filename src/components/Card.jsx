import {
  Box,
  Text,
  Heading,
  Divider,
  HStack,
  IconButton,
  Link,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Card = ({ name, time, desc, link }) => {
  return (
    <Box bg={'brand.gray'} p={['1rem', '2rem']} borderRadius={'lg'} mt="1rem">
      <Text color="brand.red" fontWeight={700} fontSize="lg">
        {time}
      </Text>
      <Heading color={'brand.darkblue'} size="xl">
        {name}
      </Heading>
      <Text color="brand.red" my="0.5rem">
        {desc}
      </Text>
      <Divider borderColor={'brand.yellow'} borderBottomWidth="3px" w={'70%'} />
      <HStack color="brand.red" spacing="0" mt="0.5rem" align={'center'}>
        {link.facebook ? (
          <IconButton
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
          <>
            <Text as="span" color={'brand.yellow'} fontWeight="700" mr={'5px'}>
              //
            </Text>
            <Link fontWeight={700} fontSize="lg" href={link.website}>
              Website
            </Link>
          </>
        ) : null}
      </HStack>
    </Box>
  );
};

export default Card;
