import React from 'react';
import { Box, Flex, Heading, Text, Image, Grid } from '@chakra-ui/react';
import duckTrain from './assets/icons/Group 27.png';
import office from './assets/icons/Group 28.png';
import forest from './assets/icons/Forest.svg';

const Stats = () => {
  return (
    <Flex
      id='stats'
      h='800px'
      bg='#C16E46'
      backgroundRepeat='no-repeat'
      direction={{ base: 'column', md: 'row' }}
    >
        <Box w="full">
          <Heading pb="1.2em" ps="14em" mt="1em" ms="auto" me="2.2em" as="h1" color={'#fff'} fontWeight="640" fontSize={['1.8rem', null, '2.5rem', '3.5rem']}>
              Hackathon 68.0 stats
          </Heading>
          <Box h="6em">
            <Grid align="right" templateColumns='repeat(3, 1fr)' gap={"0.001em"}>
              <Box ms="9em" me="11em" w="18em">
                <Image src={duckTrain} h="4.8em" w="70em"></Image>
              </Box>
              <Box w="15em">
                <Text color={"white"} align="center" fontSize={"2em"} fontWeight="650">4,20,000<sup>+</sup></Text>
                <Text color={"white"} align="center" me="0.4em" fontWeight="540" fontSize={"1.2em"}>total registrations</Text>
              </Box>
              <Box h='4.6em' me="23em" w="14em">
                <Text color={"white"} align="center" fontSize={"2em"} fontWeight="650">72,000<sup>+</sup></Text>
                <Text color={"white"} align="center" fontWeight="540" fontSize={"1.2em"}>hackers hosted</Text>
              </Box>
            </Grid>
          </Box>
          <Box h="6em" mt="3em">
            <Grid align="right" templateColumns='repeat(2, 0.9fr)'>
              <Box ms={"8.4em"} me="10em">
                <Text color={"white"} align="center" fontSize={"2em"} fontWeight="650">69<sup>+</sup></Text>
                <Text color={"white"} align="center" fontWeight="540" fontSize={"1.2em"}>Engineering Institutes</Text>
              </Box>
              <Box me="9em" w="30em">
                <Image src={office} h="9em" w="30em"></Image>
              </Box>
            </Grid>
          </Box>
          <Image mt="3.28em" w="full" src={forest} h="fill"></Image>
        </Box>        
    </Flex>
  );
}

export default Stats;