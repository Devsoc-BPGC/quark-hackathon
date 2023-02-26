import React, { useEffect } from 'react';
import { Box, Flex, Text, Image, Spacer } from '@chakra-ui/react';
import asset from './assets/icons/Asset.png';
import qcHome from './assets/SponsorLogos/qcHome.svg';
import laptop from './assets/icons/Laptop.svg';
import group30 from './assets/icons/Group30.svg';
import devfolio from './assets/SponsorLogos/devfolio.svg';
import polygon from './assets/SponsorLogos/polygon.svg';
import replit from './assets/SponsorLogos/replit.svg';
import solana from './assets/SponsorLogos/solana.svg';
import filecoin from './assets/SponsorLogos/filecoin.svg';

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
      h={['920px', '1120px', '1000px']}
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
            <Image
              className='unselectable'
              w='81px'
              h='81px'
              src={asset}
            ></Image>
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
            <Box mt={['-1.4em', '-2.3em', '-4.4em']}>
              <Image
                className='unselectable'
                h={['10em', '12em', '17em']}
                w={['12em', '14em', '18em']}
                display='inline-block'
                src={qcHome}
                align='center'
                verticalAlign='middle'
              />
            </Box>
            <div
              className='apply-button'
              data-hackathon-slug='code-by-the-beach'
              data-button-theme='light'
            ></div>
          </Box>
          <Box mt={['0em', '0em', '0em']}>
            <Text
              fontSize={{ base: '0.77rem', md: '1rem' }}
              fontWeight='700'
              color='#FFFFFF'
            >
              POWERED BY
            </Text>
            <Box mt={['-1.4em', '-2em', '-4em']}>
              <Image
                className='unselectable'
                h={['7em', '9em', '15em']}
                w={['7em', '9em', '15em']}
                display='inline-block'
                src={devfolio}
                align='center'
                verticalAlign='middle'
                pe='1em'
              />
              <Image
                ms={['0.5em', '2em', '3em']}
                className='unselectable'
                h={['7em', '9em', '15em']}
                w={['7em', '9em', '15em']}
                display='inline-block'
                src={polygon}
                align='center'
                verticalAlign='middle'
              />
            </Box>
          </Box>
          <Box mt={['-1.2em', '-1.5em', '-3.2em']}>
            <Text
              fontSize={{ base: '0.77rem', md: '1rem' }}
              fontWeight='700'
              color='#FFFFFF'
            >
              HOSTING PARTNER
            </Text>
            <Box mt={['-0.5em', '-0.5em', '-2em']}>
              <Image
                className='unselectable'
                h={['4em', '7em', '11em']}
                w={['4em', '7em', '11em']}
                display='inline-block'
                src={replit}
                align='center'
                verticalAlign='middle'
              />
              <Image
                ms={['1em', '2em', '3em']}
                className='unselectable'
                h={['1.5em', '2em', '3em']}
                w={['1.5em', '2em', '3em']}
                display='inline-block'
                src={filecoin}
                align='center'
                verticalAlign='middle'
              />
              <Image
                ms={['1em', '2em', '3em']}
                className='unselectable'
                h={['5em', '6em', '8em']}
                w={['5em', '6em', '8em']}
                display='inline-block'
                src={solana}
                align='center'
                verticalAlign='middle'
              />
            </Box>
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
          className='unselectable'
          display={{ base: 'none', md: 'block' }}
          w='100%'
          h={{ md: '350px', lg: '600px' }}
          src={laptop}
          mt='2em'
        ></Image>
      </Flex>
      <Image
        className='unselectable'
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
