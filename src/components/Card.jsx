import {
  Box,
  Text,
  Heading,
  Divider,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Card = ({ name, time, desc, link }) => {
  return (
    <Box bg={'brand.gray'} p="3rem" borderRadius={'lg'} mt="1rem">
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
        <IconButton
          icon={<FaFacebook />}
          _hover={{ bg: 'transparent' }}
          _active={{ bg: 'transparent' }}
          bg="transparent"
          p="0"
          fontSize={'2xl'}
        />
        <IconButton
          icon={<FaTwitter />}
          _hover={{ bg: 'transparent' }}
          bg="transparent"
          p="0"
          fontSize={'2xl'}
        />
        <IconButton
          icon={<FaInstagram />}
          _hover={{ bg: 'transparent' }}
          bg="transparent"
          p="0"
          fontSize={'2xl'}
        />
        <Text fontWeight={700} fontSize="lg">
          <Text as="span" color={'brand.yellow'}>
            //
          </Text>{' '}
          Website
        </Text>
      </HStack>
    </Box>
  );
};

export default Card;
