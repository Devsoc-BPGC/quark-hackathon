import React from 'react';
import { Box, Flex, Heading, Text, Image, Grid } from '@chakra-ui/react';
import duckTrain from './assets/icons/Group 27.png';
import office from './assets/icons/Group 28.png';
import forest from './assets/icons/Forest.svg';

const Stats = () => {
  return (
    <Flex
      id='stats'
      h={['980px', '980px', '840px']}
      bg='#C16E46'
      backgroundRepeat='no-repeat'
      direction={{ base: 'column', md: 'row' }}
    >
      <Box w='full'>
        <Heading
          mt={['2.8em', '2.8em', '1.7em']}
          w='fit-content'
          mb='1.2em'
          me={['auto', 'auto', '3em']}
          ms={['1.3em', '1.3em', 'auto']}
          as='h1'
          color={'#fff'}
          fontWeight={['640', '640', '640']}
          fontSize={['1.9rem', '1.9rem', '3.5rem']}
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
              mt={['9em', '9em', '0']}
              ms={['-4em', '-4em', '9em']}
              me='11em'
              w={['23em', '23em', '18em']}
            >
              <Image
                src={duckTrain}
                h={['6em', '6em', '4.8em']}
                w={['40em', '40em', '70em']}
              ></Image>
            </Box>
            <Box
              ms={['9em', '9em', '0em']}
              mt={['-12em', '-12em', '0em']}
              h={['fit-content', 'fit-content', '0em']}
              w={['fit-content', 'fit-content', '15em']}
            >
              <Text
                color={'white'}
                align='center'
                fontSize={['1.3em', '1.3em', '2em']}
                fontWeight={['648', '648', '650']}
              >
                4,20,000<sup>+</sup>
              </Text>
              <Text
                color={'white'}
                align='center'
                me='0.4em'
                fontWeight='540'
                fontSize={['0.8em', '0.8em', '1.2em']}
              >
                total registrations
              </Text>
            </Box>
            <Box
              h='4.6em'
              me='23em'
              w='14em'
              ms={['5.3em', '5.3em', '0.8em']}
              mt={['5em', '5em', '0em']}
            >
              <Text
                color={'white'}
                align='center'
                fontSize={['1.3em', '1.3em', '2em']}
                fontWeight={['648', '648', '650']}
              >
                72,000<sup>+</sup>
              </Text>
              <Text
                color={'white'}
                align='center'
                fontWeight='540'
                fontSize={['0.8em', '0.8em', '1.2em']}
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
              ms={['-22.58em', '-22.58em', '0em']}
              me={['0em', '0em', '9em']}
              w='30em'
              mt={['15em', '15em', '1em']}
            >
              <Image
                src={office}
                h='9em'
                w={['27.8em', '27.8em', '30em']}
              ></Image>
            </Box>
          </Grid>
        </Box>
        <Image
          mt={['22em', '22em', '3.28em']}
          w='full'
          src={forest}
          h='fill'
        ></Image>
      </Box>
    </Flex>
  );
};

export default Stats;
