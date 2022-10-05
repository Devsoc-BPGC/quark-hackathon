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
import edvoy from './assets/SponsorLogos/edvoy.svg';
import unstop from './assets/SponsorLogos/unstop.svg';
import robobox from './assets/SponsorLogos/robobox.svg';
import codingninjas from './assets/SponsorLogos/codingninjas.svg';
import groww from './assets/SponsorLogos/groww.svg';
import brainwonders from './assets/SponsorLogos/brainwonders.svg';
import asus from './assets/SponsorLogos/asus.svg';
import mdsm from './assets/SponsorLogos/mdsm.svg';

const OurSponsors = () => {
  return (
    <Flex
      id='oursponsors'
      h={['400px', '490px', '800px']}
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
          <Box mt={'-1em'}>
            <HStack mt={['-5em', '3em', '3em']} ms='3.8em' gap={'3em'}>
              <Box>
                <Image src={edvoy}></Image>
              </Box>
              <Box>
                <Image src={unstop}></Image>
              </Box>
              <Box>
                <Image src={robobox}></Image>
              </Box>
              <Box>
                <Image src={codingninjas}></Image>
              </Box>
            </HStack>
            <HStack w='fit-content' ms='15em' mt='4em' gap='4em'>
              <Box>
                <Image src={groww}></Image>
              </Box>
              <Box>
                <Image src={brainwonders}></Image>
              </Box>
            </HStack>
          </Box>
          <Box>
            <HStack w='fit-content' ms='30em' mt='4em' gap='4em'>
              <Box>
                <Image src={asus}></Image>
              </Box>
            </HStack>
          </Box>
        </Hide>
        <Show below='md'>
          <Heading mt='2em' align='left' ms='2em' as='h2' fontSize={'0.8em'}>
            Our sponsors
          </Heading>
          <Box ms={['0.1em', '1em', '1em']} mt={['3.7em', '5em', '5em']}>
            <Image w={['99%', '95%', '95%']} h='fit-content' src={mdsm}></Image>
          </Box>
        </Show>
      </Box>
    </Flex>
  );
};

export default OurSponsors;
