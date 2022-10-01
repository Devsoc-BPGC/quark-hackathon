import React from 'react';
import { Box, Flex, Heading, Text, Image, Grid } from '@chakra-ui/react';
import duckTrain from './assets/icons/Group 27.png';
import office from './assets/icons/Group 28.png';
import forest from './assets/icons/Forest.svg';

const Stats = () => {
  return (
    <Flex
      id='stats'
      h={['850px', '980px', '840px']}
      bg='#C16E46'
      backgroundRepeat='no-repeat'
      direction={{ base: 'column', md: 'row' }}
    >
      <Box w='full'>
        <Heading
          mt={['2.4em', '2.1em', '1.4em']}
          w='fit-content'
          mb='1.2em'
          me={['auto', 'auto', '3em']}
          ms={['0.5em', '1.8em', 'auto']}
          as='h1'
          color={'#fff'}
          fontWeight={['640', '640', '640']}
          fontSize={['1.6rem', '2.3rem', '3.8rem']}
        >
          Hackathon 68.0 stats
        </Heading>
        <Box h='6em'>
          <Grid
            align='right'
            templateColumns={[
              'repeat(0, 0fr)',
              'repeat(0, 0fr)',
              'repeat(3, 1fr)',
            ]}
            gap={['0em', '0em', '0.001em']}
          >
            <Box
              mt={['6.4em', '9em', '0']}
              ms={['-7em', '-4em', '9em']}
              me='11em'
              w={['23em', '23em', '18em']}
            >
              <Image
                src={duckTrain}
                h={['5.2em', '6em', '4.8em']}
                w={['20em', '40em', '70em']}
              ></Image>
            </Box>
            <Box
              ms={['4.7em', '9em', '0em']}
              mt={['-9.7em', '-12em', '0em']}
              h={['fit-content', 'fit-content', '0em']}
              w={['fit-content', 'fit-content', '15em']}
            >
              <Text
                color={'white'}
                align='center'
                fontSize={['1em', '1.3em', '2em']}
                fontWeight={['648', '648', '650']}
              >
                4,20,000<sup>+</sup>
              </Text>
              <Text
                color={'white'}
                align='center'
                me='0.4em'
                fontWeight='540'
                fontSize={['0.7em', '0.8em', '1.2em']}
              >
                total registrations
              </Text>
            </Box>
            <Box
              h='4.6em'
              me='23em'
              w='14em'
              ms={['0.8em', '5.3em', '0.8em']}
              mt={['4.5em', '5em', '0em']}
            >
              <Text
                color={'white'}
                align='center'
                fontSize={['1em', '1.3em', '2em']}
                fontWeight={['648', '648', '650']}
              >
                72,000<sup>+</sup>
              </Text>
              <Text
                color={'white'}
                align='center'
                fontWeight='540'
                fontSize={['0.7em', '0.8em', '1.2em']}
              >
                hackers hosted
              </Text>
            </Box>
          </Grid>
        </Box>
        <Box h='6em' mt='3em'>
          <Grid align='right' templateColumns='repeat(2, 0.9fr)'>
            <Box
              ms={'8.4em'}
              me='10em'
              mt='1em'
              w={['fit-content', 'fit-content', '']}
            >
              <Text
                color={'white'}
                align='center'
                fontSize={['0em', '0em', '2em']}
                fontWeight='650'
              >
                69<sup>+</sup>
              </Text>
              <Text
                color={'white'}
                align='center'
                fontWeight='540'
                fontSize={['0em', '0em', '1.2em']}
              >
                Engineering Institutes
              </Text>
            </Box>
            <Box
              ms={['-29.8em', '-22.58em', '0em']}
              me={['0em', '0em', '9em']}
              w='30em'
              mt={['12em', '15em', '1em']}
            >
              <Image
                src={office}
                h={['7em', '9em', '9em']}
                w={['19.8em', '27.8em', '30em']}
              ></Image>
            </Box>
          </Grid>
        </Box>
        <Image
          mt={['18.5em', '22em', '3.28em']}
          w='full'
          src={forest}
          h='fill'
        ></Image>
      </Box>
    </Flex>
  );
};

export default Stats;
