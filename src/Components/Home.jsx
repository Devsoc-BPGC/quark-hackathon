import React, { useEffect } from 'react';
import { Box, Flex, Text, Image, Spacer } from '@chakra-ui/react';
import asset from './assets/icons/Asset.png';
import qclogo from './assets/SponsorLogos/qclogo.svg';
import laptop from './assets/icons/Laptop.svg';
import group30 from './assets/icons/Group30.svg';

export const Home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Flex
      id='home'
      h={['700px', '800px', '800px']}
      bgGradient='linear(to-b, #183249, #344158, #2A4A62)'
      backgroundRepeat='no-repeat'
      direction={{ base: 'column', md: 'row' }}
    >
      <Flex>
        <Flex
          zIndex={1}
          wrap='no-wrap'
          direction='column'
          justifyContent='left'
          textAlign='left'
          ml='8vw'
          mt={['1.7em', '8vh', '10vh']}
          shrink={2}
        >
          <Box display={{ base: 'none', lg: 'block' }}>
            <Image w='81px' h='81px' src={asset}></Image>
          </Box>
          <Box mb='25px'>
            <Text
              lineHeight='4.5rem'
              color='#FFFFFF'
              fontWeight='600'
              fontSize={['1.6rem', '2.3rem', '4rem']}
              wordBreak='break-word'
            >
              Code by the Beach
            </Text>
            <Spacer h={{ base: '1.5rem', md: '0' }} />
            <Text
              mt={['-1.5em', '-0.8em', '2em']}
              fontSize={{ base: '0.75rem', md: '1rem' }}
              lineHeight='12px'
              color='#93E5C8'
              fontWeight='500'
            >
              \\ A BITS Goa Initiative
            </Text>
          </Box>
          <Box mt={['0.5em', '1em', '1em']}>
            <Text
              fontSize={{ base: '0.77rem', md: '1rem' }}
              fontWeight='700'
              color='#FFFFFF'
            >
              HOSTED BY
            </Text>
            <Box mt={['-1.4em', '-1.5em', '-4em']}>
              <Image
                h={['10em', '12em', '17em']}
                w={['12em', '14em', '18em']}
                display='inline-block'
                src={qclogo}
                align='center'
                verticalAlign='middle'
              />
            </Box>
            <div
              class='apply-button'
              data-hackathon-slug='code-by-the-beach'
              data-button-theme='light'
            ></div>
          </Box>
        </Flex>
      </Flex>
      <Flex
        padding={0}
        position={{ md: 'absolute' }}
        zIndex={0}
        left={{ md: '52vw' }}
        top={{ md: '9vh', lg: '12vh' }}
      >
        <Image
          display={{ base: 'none', md: 'block' }}
          w='100%'
          h={{ md: '350px', lg: '600px' }}
          src={laptop}
          mt='2em'
        ></Image>
      </Flex>
      <Image
        mt='2em'
        display={{ base: 'block', md: 'none' }}
        w='100%'
        h='398px'
        src={group30}
      ></Image>
    </Flex>
  );
};

export default Home;
