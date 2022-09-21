import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import Bits from './assets/icons/Bitsgoa.svg';

const About = () => {
  return (
    <Flex
      id='about'
      h='750px'
      bgGradient='linear(to-b, #2A4A62, #345F6C)'
      backgroundRepeat='no-repeat'
      direction={{ base: 'column', md: 'row' }}
    >
        <Flex direction="column">
            <Box ms={'6.2em'}>
                <Heading align={'left'} wordBreak={'break-word'} as="h1" color={'#D9D9D9'} fontWeight="620" fontSize={['1.8rem', null, '2.5rem', '3.5rem']}>
                    Lorem ipsum dolor<br /> sit amet, consectetur<br /> adipiscing elit. 
                </Heading>
            </Box>
            <Box ms={'6.2em'} mt="2.6em">
                <Text mt="1em" align={'left'} color={'#EFF8FA'} fontSize={['0.11rem', null, '0.5rem', '1rem']} fontWeight="200">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br /> tempor incididunt ut labore et dolore magna aliqua. Morbi tincidunt ornare<br /> massa eget egestas.<br /><br />Sagittis orci a scelerisque purus semper. Gravida neque convallis a cras<br /> semper auctor neque. Blandit cursus risus at ultrices. Magna fermentum<br /> iaculis eu non diam phasellus vestibulum. Fermentum dui faucibus in ornare<br /> quam.
                </Text>
            </Box>
        </Flex>
        <Flex>

        </Flex>
    </Flex>
  );
}

export default About;