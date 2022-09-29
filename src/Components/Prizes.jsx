import React from 'react';
import { Flex, HStack, Text, VStack, Image, Box } from '@chakra-ui/react';
import rupee from './assets/icons/rupee.png';
import trophies from './assets/icons/Trophies.png';

const Prizes = () => {
  return (
    <Flex
      id='prizes'
      bgGradient={'linear-gradient(180deg, #2C4C63 0%, #29728F 98.96%);'}
    >
      <Flex m={{ base: '1vw', md: '5vw' }}>
        <VStack alignItems={'center'}>
          <Text
            as={'h2'}
            w={'85vw'}
            fontSize={{ base: '1.8em', md: '3em' }}
            fontWeight={'700'}
            textAlign={{ base: 'left', md: 'right' }}
            mb={'5rem'}
            color={'#EFF8FA'}
          >
            Hackathon 69.0 Prizes &#38; Tracks
          </Text>
          <Flex
            justifyContent={'space-around'}
            alignItems={'center'}
            direction={{ base: 'column', md: 'row' }}
          >
            <VStack
              alignItems={{ base: 'center', md: 'flex-start' }}
              w={{ base: '80%', md: '50%' }}
              gap={'4rem'}
            >
              <VStack alignItems={'flex-start'}>
                <Text
                  fontSize={{ base: '1.5em', md: '2em' }}
                  fontWeight='700'
                  color={'#EFF8FA'}
                >
                  Event Description
                </Text>
                <VStack
                  alignItems={'flex-start'}
                  spacing={{ base: '2rem', md: '' }}
                >
                  <Box>
                    <Text
                      textAlign={'left'}
                      fontSize={{ base: '16px', md: '18px' }}
                      fontWeight='400'
                      w={{ base: '19.5em', md: '23em' }}
                      color={'#EFF8FA'}
                    >
                      Excepteur sint occaecat cupidatat ure dolor in
                      reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur.
                    </Text>
                  </Box>
                  <HStack>
                    <Image
                      src={rupee}
                      h={{ base: '17.86px', md: '24px' }}
                      w={{ base: '17.86px', md: '24px' }}
                    />
                    <Text
                      fontSize={{ base: '14px', md: '24px' }}
                      fontWeight='700'
                      color={'#EFF8FA'}
                    >
                      5,000
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
              <Box
                textAlign={'center'}
                lineHeight={{ base: '77px', md: '94.33px', lg: '128px' }}
                bgColor={'#EFF8FA'}
                w={{ base: '287px', md: '350px', lg: '475px' }}
                h={{ base: '77px', md: '94.33px', lg: '128px' }}
                borderRadius={'20px'}
                boxShadow={{
                  base: '0px -25px 0 -15px #009DD9,0px -45px 0 -28px #84E1FF,0px -58.5px 0 -34.5px #EFF8FA',
                  md: '0px -30px 0 -20px #009DD9,0px -50px 0 -30px #84E1FF,0px -70px 0 -40px #EFF8FA',
                }}
              >
                <Text
                  color={'#183249'}
                  fontSize={{ base: '24px', md: '30px', lg: '36px' }}
                  fontWeight={'700'}
                >
                  Cosmic Express
                </Text>
              </Box>
            </VStack>
            <Image
              ms={{ md: '11em' }}
              src={trophies}
              mt={{ base: '4.5rem' }}
              mb={{ base: '4rem' }}
              w={{ base: '293.3px', md: '350px', lg: '420px' }}
              h={{ base: '246.4px', md: '294px', lg: '352px' }}
            />
          </Flex>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Prizes;
