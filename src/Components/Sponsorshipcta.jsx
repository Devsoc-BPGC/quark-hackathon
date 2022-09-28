import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Image,
  Hide,
  Show,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import girl from './assets/icons/girldraw.svg';

const SponsorshipCTA = () => {
  return (
    <Flex
      id='about'
      h={['670px', '670px', '900px']}
      bg='#EFF8FA'
      backgroundRepeat='no-repeat'
      direction={{ base: 'column', md: 'row' }}
    >
      <Box w='full'>
        <Box h='50%'>
          <Box w='full' h='full'>
            <Box align='left' mt='4em' ms='4em' w='29em'>
              <Heading
                color={'#31433F'}
                as='h1'
                fontWeight={'670'}
                fontSize='2.9em'
              >
                Sponsor a special weekend
              </Heading>
            </Box>
            <Box align='left' mt='1.5em' ms='5em' w='42em' fontSize={'0.8em'}>
              <Text>
                Nderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.rure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </Text>
            </Box>
            <Box mt='2em' w='fit-content' ms='4em'>
              <Button
                w='18em'
                h='3em'
                _hover={{ bg: 'black' }}
                borderRadius='10em'
                bg='#183249'
              >
                <Text
                  fontWeight={'380'}
                  color={'#EFF8FA'}
                  _hover={{ cursor: 'pointer' }}
                >
                  Contact our sponsorship team
                </Text>
              </Button>
            </Box>
            <Box w='fit-content' ms='auto' mt='-14.5em' me='6em'>
              <Image src={girl}></Image>
            </Box>
          </Box>
          <Box w='full' h='full'>
            <Box w='fit-content'>
              <Heading as='h2' fontWeight={'600'} fontSize='1em' ms='3em'>
                Sponsor showcase
              </Heading>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default SponsorshipCTA;
