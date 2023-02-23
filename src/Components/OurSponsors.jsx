import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Image,
  Hide,
  Show,
  Heading,
} from '@chakra-ui/react';
import group from './assets/SponsorLogos/group.png';
import devfolio from './assets/SponsorLogos/Devfolio.png';
import solana from './assets/SponsorLogos/Solana.png';
import polygon from './assets/SponsorLogos/Polygon.png';
import filecoin from './assets/SponsorLogos/Filecoin.png';
import replit from './assets/SponsorLogos/Replit.png';

const OurSponsors = () => {
  return (
    <Flex
      id='oursponsors'
      h={['400px', '440px', '600px']}
      bg='#EFF8FA'
      backgroundRepeat='no-repeat'
      direction={{ base: 'column', md: 'row' }}
    >
      <Box mt={['2em', '3em', '3em']} w='full'>
        <Hide below='md'>
          <Heading
            align='left'
            as='h2'
            mt='1em'
            ms='5em'
            fontSize={['1em', '1.2em', '1em']}
          >
            Our sponsors
          </Heading>
          <Box mt={'1em'}>
            <HStack mt={['-5em', '3em', '3em']} ms='5em' me='5em' gap={'3em'}>
              <Box w='20em'>
                <Image src={devfolio}></Image>
              </Box>
              <Box w='20em'>
                <Image src={solana}></Image>
              </Box>
              <Box w='20em'>
                <Image src={polygon}></Image>
              </Box>
              <Box w='20em'>
                <Image src={filecoin}></Image>
              </Box>
            </HStack>
            <HStack mt='4em'>
              <Box
                w={['', '', '8em', '15em']}
                ms={['0em', '15em', '15em', '19em', '30em']}
              >
                <Image src={replit}></Image>
              </Box>
            </HStack>
          </Box>
        </Hide>
        <Show below='md'>
          <Heading mt='2em' align='left' ms='2em' as='h2' fontSize={'0.8em'}>
            Our sponsors
          </Heading>
          <Box ms={['0.1em', '1em', '1em']} mt={['3.7em', '5em', '-5em']}>
            <Image
              w={['99%', '95%', '95%']}
              h='fit-content'
              src={group}
            ></Image>
          </Box>
        </Show>
      </Box>
    </Flex>
  );
};

export default OurSponsors;
