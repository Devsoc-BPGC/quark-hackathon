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
      h='800px'
      bgGradient='linear(to-b, #2A4A62, #345F6C)'
      backgroundRepeat='no-repeat'
      direction={{ base: 'column', md: 'row' }}
    >
        <Box mt="5em" me="4em">
            <Box ms={'6.2em'}>
                <Heading align={'left'} as="h1" color={'#D9D9D9'} fontWeight="620" fontSize={['1.8rem', null, '2.5rem', '3.5rem']}>
                    Lorem ipsum dolor<br /> sit amet, consectetur<br /> adipiscing elit. 
                </Heading>
            </Box>
            <Box ms={'6.2em'} mt="3em">
                <Text align={'left'} color={'#EFF8FA'} fontSize={['0.5rem', null, '0.5rem', '1rem']} fontWeight="200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt ornare<br /> massa eget egestas.<br /><br />Sagittis orci a scelerisque purus semper. Gravida neque convallis a cras<br /> semper auctor neque. Blandit cursus risus at ultrices. Magna fermentum<br /> iaculis eu non diam phasellus vestibulum. Fermentum dui faucibus in ornare<br /> quam.
                </Text>
            </Box>
        </Box>
        <Box w="39em">  
          <Box boxSize={"fit-content"}>
            <Image h="22em" w="22em" mt="0" src={bits} mb="0"></Image>
          </Box>  
          <Box mt="-3.6em" ms="14.6em" boxSize={"fit-content"} zIndex={2}>
            <Image h="10em" w="10em" src={heli} mb="auto" ms="1em"></Image>
          </Box>  
          <Box mt="-7em" ms="7.5em"  boxSize={"fit-content"}>
            <Image h="8.5em" w="8.5em" src={hackers} ms="0"></Image>
          </Box> 
          <Box mt="-7.3em" ms="1em" zIndex={-1} boxSize={"fit-content"}>
            <Image h="6.7em" w="7em" src={vr} ms="1.8em" mt="4.5em"></Image>
          </Box> 
        </Box>      
    </Flex>
  );
}

export default About;