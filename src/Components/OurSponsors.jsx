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
import facebook from './assets/SponsorLogos/FacebookLogo.png';
import shopify from './assets/SponsorLogos/Shopify Logo.png';
import google from './assets/SponsorLogos/Google Logo.png';
import surveymonkey from './assets/SponsorLogos/SurveyMonkey Logo.png';
import accenture from './assets/SponsorLogos/Accenture Logo.png';
import ibm from './assets/SponsorLogos/IBM Cloud Logo.png';
import bloomberg from './assets/SponsorLogos/BloombergLogo.png';
import facebookInv from './assets/SponsorLogos/FacebookLogo-1.png';
import shopifyInv from './assets/SponsorLogos/Shopify Logo-1.png';
import googleInv from './assets/SponsorLogos/Google Logo-1.png';
import surveymonkeyInv from './assets/SponsorLogos/SurveyMonkey Logo-1.png';
import accentureInv from './assets/SponsorLogos/Accenture Logo-1.png';
import ibmInv from './assets/SponsorLogos/IBM Cloud Logo-1.png';
import bloombergInv from './assets/SponsorLogos/BloombergLogo-1.png';
import straight from './assets/SponsorLogos/Group 23.png';
import inv from './assets/SponsorLogos/Group 24.png';

const OurSponsors = () => {
  return (
    <Flex
      id='oursponsors'
      h={['510px', '670px', '800px']}
      bg='#EFF8FA'
      backgroundRepeat='no-repeat'
      direction={{ base: 'column', md: 'row' }}
    >
      <Box w='full'>
        <Hide below='md'>
          <Heading align='left' as='h2' mt='1em' ms='5em' fontSize={'1em'}>
            Our sponsors
          </Heading>
          <Box mt='-1em'>
            <HStack mt='3em' ms='3.8em' gap={'3em'}>
              <Box>
                <Image src={facebook}></Image>
              </Box>
              <Box>
                <Image src={shopify}></Image>
              </Box>
              <Box>
                <Image src={google}></Image>
              </Box>
              <Box>
                <Image src={surveymonkey}></Image>
              </Box>
            </HStack>
            <HStack w='fit-content' ms='15em' mt='4em' gap='4em'>
              <Box>
                <Image src={accenture}></Image>
              </Box>
              <Box>
                <Image src={ibm}></Image>
              </Box>
              <Box>
                <Image src={bloomberg}></Image>
              </Box>
            </HStack>
          </Box>
          <Box>
            <HStack w='fit-content' ms='15em' mt='4em' gap='4em'>
              <Box>
                <Image src={accentureInv}></Image>
              </Box>
              <Box>
                <Image src={ibmInv}></Image>
              </Box>
              <Box>
                <Image src={bloombergInv}></Image>
              </Box>
            </HStack>
            <HStack mt='4.3em' ms='3.8em' gap={'3em'}>
              <Box>
                <Image src={facebookInv}></Image>
              </Box>
              <Box>
                <Image src={shopifyInv}></Image>
              </Box>
              <Box>
                <Image src={googleInv}></Image>
              </Box>
              <Box>
                <Image src={surveymonkeyInv}></Image>
              </Box>
            </HStack>
          </Box>
        </Hide>
        <Show below='md'>
          <Heading mt='2em' align='left' ms='2em' as='h2' fontSize={'0.8em'}>
            Our sponsors
          </Heading>
          <Box ms='1em' mt='3em'>
            <Image w='95%' h='fit-content' src={straight}></Image>
          </Box>
          <Box ms='1em' mt='3em'>
            <Image w='95%' h='fit-content' src={inv}></Image>
          </Box>
        </Show>
      </Box>
    </Flex>
  );
};

export default OurSponsors;
