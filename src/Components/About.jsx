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
        <Box me="auto" mt={['3em', '3em', "5em"]}>
            <Box w={["16em", "16em", "32em"]} ms={'6em'}>
                <Heading align={'left'} as="h1" color={'#D9D9D9'} fontWeight="620" fontSize={['1.8rem', null, '2.5rem', '3.5rem']}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </Heading>
            </Box>
            <Box w={["14.7em", "14.7em", "26em"]} ms={'6.2em'} mt={["2em", "2em", "3em"]}>
                <Text align={'left'} color={'#EFF8FA'} fontSize={['1rem', null, '1rem', '1rem']} fontWeight="200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt ornare massa eget egestas.<br /><br />Sagittis orci a scelerisque purus semper. Gravida neque convallis a cras semper auctor neque. Blandit cursus risus at ultrices. Magna fermentum iaculis eu non diam phasellus vestibulum. Fermentum dui faucibus in ornare quam.
                </Text>
            </Box>
        </Box>
        <Box w="39em">  
          <Box ms={["14.5em", "14.5em", "0.1em"]} mt={["-0.8em", "-0.8em", null]} boxSize={"fit-content"} zIndex={-2}>
            <Image h={["12.8em", "12.8em", "22em"]} w={["12.8em", "12.8em", "22em"]} mt="0" src={bits} mb="0"></Image>
          </Box>  
          <Box mt={["-10.6em", "-10.6em", "-3.6em"]} ms={["4.4em", "3.4em", "14.6em"]} boxSize={"fit-content"} zIndex={-3}>
            <Image h={["7em", "7em", "10em"]} w={["7em", "7em", "10em"]} src={heli} mb="auto" ms="1em"></Image>
          </Box>  
          <Box mt={["0.8em", "0.8em", "-7em"]} ms={["7em", "7em", "7.5em"]}  boxSize={"fit-content"}>
            <Image h={["5.7em", "5.7em", "8.5em"]} w={["5.7em", "5.7em", "8.5em"]} src={hackers} ms="0"></Image>
          </Box> 
          <Box mt={["-7.4em", "-7.4em", "-7.3em"]} ms={["14.8em", "14.8em", "1em"]} zIndex={-1} boxSize={"fit-content"}>
            <Image h={["4em", "4em", "6.7em"]} w={["4em", "4em", "6.7em"]} src={vr} ms="1.8em" mt="4.5em"></Image>
          </Box> 
        </Box>      
    </Flex>
  );
}

export default About;