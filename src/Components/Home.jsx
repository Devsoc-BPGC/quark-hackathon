import React from 'react';
import { Box, Flex, Text, Button, Image, Spacer } from '@chakra-ui/react';
import asset from './assets/icons/Asset.png';
import qclogo from './assets/icons/qclogo.svg';
import devfolio from './assets/icons/Devfolio.png';
import laptop from './assets/icons/Laptop.svg';
import group30 from './assets/icons/Group30.svg';
export const Home = () => {
  return (
    <Flex
      id='home'
      h='981px'
      bgGradient='radial(rgba(24, 33, 50, 1),rgba(44, 64, 91, 1))'
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
          mt='12vh'
          shrink={2}
        >
          <Box display={{ base: 'none', lg: 'block' }}>
            <Image w='90px' h='90px' src={asset}></Image>
          </Box>
          <Box mb='25px'>
            <Text
              lineHeight='4.5rem'
              color='#FFFFFF'
              fontWeight='900'
              fontSize={['1.8rem', null, '2.5rem', '4rem']}
              wordBreak='break-word'
            >
              Generic Hackathon 69.0
            </Text>
            <Spacer h={{ base: '1.5rem', md: '0' }} />
            <Text
              fontSize={{ base: '0.75rem', md: '1rem' }}
              lineHeight='12px'
              color='#93E5C8'
              fontWeight='700'
            >
              \\Dream Big.
            </Text>
            <Text
              as='span'
              fontSize={{ base: '0.75rem', md: '1rem' }}
              lineHeight='24px'
              color='#93E5C8'
              fontWeight='700'
            >
              \\Do{' '}
            </Text>
            <Text
              as='span'
              display='inline-block'
              fontSize={{ base: '1rem', md: '1.5rem' }}
              color='#93E5C8'
              fontWeight='700'
            >
              Bigger!
            </Text>
          </Box>
          <Box mb='10px'>
            <Text
              fontSize={{ base: '0.77rem', md: '1rem' }}
              fontWeight='900'
              color='#FFFFFF'
            >
              Hosted By
            </Text>
            <Box>
              <Image
                h={{ base: '43px', md: '56px' }}
                w={{ base: '40px', md: '52px' }}
                display='inline-block'
                src={qclogo}
                align='center'
                verticalAlign='middle'
              />
              <Text as='span' verticalAlign='middle'>
                <Text
                  as='span'
                  fontSize={{ base: '1.5rem', md: '2.5rem' }}
                  color='#FFFFFF'
                >
                  Quark
                </Text>
                <Text
                  as='span'
                  fontSize={{ base: '1.2rem', md: '2rem' }}
                  color='#FFFFFF'
                >
                  Controls
                </Text>
              </Text>
            </Box>
          </Box>
          <Button
            w={{ sm: '150px', md: '175px' }}
            mt='25px'
            backgroundColor='#3770FF'
          >
            <Image w='25px' h='25px' src={devfolio} mr='2px'></Image>
            <Text
              as='span'
              fontSize={{ base: '0.75rem', md: '1rem' }}
              color='#FFFFFF'
            >
              Apply with Devfolio
            </Text>
          </Button>
        </Flex>
      </Flex>
      <Flex
        padding={0}
        position={{ md: 'absolute' }}
        zIndex={0}
        left={{ md: '50vw' }}
        top={{ md: '10vh', lg: '10vh' }}
      >
        <Image
          display={{ base: 'none', md: 'block' }}
          w='100%'
          h={{ md: '400px', lg: '657px' }}
          src={laptop}
        ></Image>
      </Flex>
      <Image
        display={{ base: 'block', md: 'none' }}
        w='100%'
        h='398px'
        src={group30}
      ></Image>
    </Flex>
  );
};

export default Home;
