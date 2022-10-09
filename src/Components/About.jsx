import React from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import bits from './assets/icons/chamath.png';
import heli from './assets/icons/helicopter.png';
import vr from './assets/icons/vr.png';
import hackers from './assets/icons/hackers.png';

const About = () => {
  return (
    <Flex
      id='about'
      h={['950px', '1060px', '800px']}
      bgGradient='linear(to-b, #2A4A62, #345F6C)'
      backgroundRepeat='no-repeat'
      direction={{ base: 'column', md: 'row' }}
    >
      <Box me='auto' mt={['3em', '3em', '5em']}>
        <Box w={['16em', '16em', '32em']} ms={['2.2em', '6em', '6em']}>
          <Heading
            align={'left'}
            as='h1'
            color={'#D9D9D9'}
            fontWeight='620'
            fontSize={['1.6rem', '2.5rem', '3.5rem']}
          >
            Code by the Beach
            <br />
            A BITS Goa
            <br />
            Hackathon
          </Heading>
        </Box>
        <Box
          w={['14.7em', '14.7em', '26em']}
          ms={['2.2em', '6.2em', '6.2em']}
          mt={['2em', '2em', '3em']}
        >
          <Text
            align={'left'}
            color={'#EFF8FA'}
            fontSize={['0.9rem', '1rem', '1rem']}
            fontWeight='200'
          >
            In the context of a hackathon, the word "hack" is used to describe
            how multiple technologies can be used together in a new and
            innovative way. Teams of 3 to 4 people spend the weekend working on
            innovative software and hardware solutions to real-world problems.
            <br />
            <br />
            These projects range in platform and application, including elements
            of web development, mobile applications, drones, and more. However,
            many times the most important aspect of a hackathon is the community
            it generates and skills that inexperienced hackers walk away with.
          </Text>
        </Box>
      </Box>
      <Box w='39em' mt={['2.2em', '1em', '0em']}>
        <Box
          ms={['7.7em', '14.5em', '0.1em']}
          mt={['-0.8em', '-0.8em', null]}
          boxSize={'fit-content'}
          zIndex={-2}
        >
          <Image
            h={['12.8em', '13em', '22em']}
            w={['12.8em', '13em', '22em']}
            mt='0'
            src={bits}
            mb='0'
          ></Image>
        </Box>
        <Box
          mt={['-10.6em', '-10.6em', '-3.6em']}
          ms={['-0.5em', '4.5em', '14.6em']}
          boxSize={'fit-content'}
          zIndex={-3}
        >
          <Image
            h={['7em', '8em', '10em']}
            w={['7em', '8em', '10em']}
            src={heli}
            mb='auto'
            ms='1em'
          ></Image>
        </Box>
        <Box
          mt={['0.8em', '0.8em', '-7em']}
          ms={['3em', '8.5em', '7.5em']}
          boxSize={'fit-content'}
        >
          <Image
            h={['5.7em', '5.9em', '8.5em']}
            w={['5.7em', '5.9em', '8.5em']}
            src={hackers}
            ms='0'
          ></Image>
        </Box>
        <Box
          mt={['-7em', '-7.4em', '-7.3em']}
          ms={['8em', '15em', '1em']}
          zIndex={-1}
          boxSize={'fit-content'}
        >
          <Image
            h={['4em', '4.2em', '6.7em']}
            w={['4em', '4.2em', '6.7em']}
            src={vr}
            ms='1.8em'
            mt='4.5em'
          ></Image>
        </Box>
      </Box>
    </Flex>
  );
};

export default About;
