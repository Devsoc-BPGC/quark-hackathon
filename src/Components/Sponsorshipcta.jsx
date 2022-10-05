import React, { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import girl from './assets/icons/girldraw.svg';
import mahindra from './assets/icons/Mahindra.svg';
import sabre from './assets/icons/sabre.svg';
import technobytes from './assets/icons/technobytes.png';

const SponsorshipCTA = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabsChange = index => {
    setTabIndex(index);
  };

  return (
    <Flex
      id='sponsorshipcta'
      h={['1050px', '1090px', '870px']}
      bg='#EFF8FA'
      backgroundRepeat='no-repeat'
      direction={{ base: 'column', md: 'row' }}
    >
      <Box w='full'>
        <Box h='50%'>
          <Box w='full' h='full'>
            <Box
              align='left'
              mt={['2.3em', '2.3em', '4em']}
              ms={['1em', '2.3em', '4em']}
              w='29em'
            >
              <Heading
                color={'#31433F'}
                as='h1'
                fontWeight={'670'}
                fontSize={['1.2em', '1.5em', '2.9em']}
              >
                Sponsor a special weekend
              </Heading>
            </Box>
            <Box
              align='left'
              mt='1.5em'
              ms={['1.8em', '3.2em', '5em']}
              w={['24.3em', '24.3em', '42em']}
              fontSize={['0.6em', '0.75em', '0.8em']}
            >
              <Text>
                Nderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                in culpa qui officia deserunt mollit anim id est laborum.rure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </Text>
            </Box>
            <Box
              mt={['1em', '1em', '2em']}
              w='fit-content'
              ms={['1em', '2.7em', '4em']}
            >
              <Button
                w={['16em', '16em', '18em']}
                h={['2.4em', '2.7em', '3em']}
                _hover={{ bg: 'blue' }}
                borderRadius='10em'
                bg='#183249'
              >
                <Text
                  mt={['-0.25em', '-0.25em', null]}
                  fontSize={['0.9em', '1em', '1em']}
                  fontWeight={'380'}
                  color={'#EFF8FA'}
                  _hover={{ cursor: 'pointer' }}
                >
                  Contact our sponsorship team
                </Text>
              </Button>
            </Box>
            <Box
              w='fit-content'
              ms={['1.2em', '4em', 'auto']}
              mt={['2.5em', '2.5em', '-14.5em']}
              me={['3em', null, '6em']}
            >
              <Image w={['16em', '17em', '25em']} src={girl}></Image>
            </Box>
          </Box>
          <Box mt={['-4em', '-4em', '-1.3em']} w='full' h='full'>
            <Box w='fit-content'>
              <Heading
                as='h2'
                fontWeight={['700', '700', '700']}
                mt={['5em', '5em', '0em']}
                fontSize={['0.85em', '0.85em', '1em']}
                ms={['0.8em', '2.2em', '4.3em']}
              >
                Sponsor showcase
              </Heading>
            </Box>
            <Box
              w='fit-content'
              ms={['-0.99em', '-0.7em', '1em']}
              mt={['5.5em', '5.5em', '2em']}
            >
              <Tabs
                variant='soft-rounded'
                colorScheme='black'
                index={tabIndex}
                onChange={handleTabsChange}
              >
                <TabPanels>
                  <TabPanel>
                    <Image
                      mt={['-5em', '-4.5em', '1em']}
                      ms={['0.7em', '2em', '7em']}
                      w={['7em', '8em', '11em']}
                      src={mahindra}
                    ></Image>
                    <Box
                      h={['14em', '15em', '9em']}
                      align='left'
                      bg='white'
                      w={['15.5em', '18em', '36em']}
                      mt={['1.5em', '1.5em', '-7em']}
                      ms={['1em', '3em', '25em']}
                      boxShadow={'-9px 10px 0px rgba(44, 135, 161, 0.6)'}
                      borderRadius={'8px'}
                    >
                      <Text
                        ms={['0.8em', '0.8em', '2em']}
                        pt='2.4em'
                        pe={['0em', '0em', '2em']}
                        pb='1em'
                        fontSize={'0.75em'}
                        fontWeight='500'
                      >
                        "We have participated in Quark since the past 2
                        consecutive years. The innovative ideas they come up
                        with for various workshops and competitions is extremely
                        enlightening. There was an ample opportunity to share
                        information about Scorpio."
                      </Text>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Image
                      mt={['-5em', '-4.5em', '1em']}
                      ms={['0.7em', '2em', '7em']}
                      w={['7em', '8em', '11em']}
                      src={sabre}
                    ></Image>
                    <Box
                      h={['14em', '15em', '9em']}
                      align='left'
                      bg='white'
                      w={['15.5em', '18em', '36em']}
                      mt={['0.8em', '0.3em', '-8.1em']}
                      ms={['1em', '3em', '25em']}
                      boxShadow={'-9px 10px 0px rgba(44, 135, 161, 0.6)'}
                      borderRadius={'8px'}
                    >
                      <Text
                        ms={['0.8em', '0.8em', '2em']}
                        pt='2.4em'
                        pe={['0em', '0em', '2em']}
                        pb='1em'
                        fontSize={'0.75em'}
                        fontWeight='500'
                      >
                        "Quark gave us a huge platform to implement our
                        campaigns and expand our marketing horizon."
                      </Text>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Image
                      mt={['-4.3em', '-4em', '1em']}
                      ms={['0.7em', '2em', '7em']}
                      w={['11em', '13.5em', '16.3em']}
                      src={technobytes}
                    ></Image>
                    <Box
                      h={['14em', '15em', '9em']}
                      align='left'
                      bg='white'
                      w={['15.5em', '18em', '36em']}
                      mt={['1.7em', '1.5em', '-5.35em']}
                      ms={['1em', '3em', '25em']}
                      boxShadow={'-9px 10px 0px rgba(44, 135, 161, 0.6)'}
                      borderRadius={'8px'}
                    >
                      <Text
                        ms={['0.8em', '0.8em', '2em']}
                        pt='2.4em'
                        pe={['0em', '0em', '2em']}
                        pb='1em'
                        fontSize={'0.75em'}
                        fontWeight='500'
                      >
                        "BITS Goa gave us an opportunity to organise workshops
                        for the students. Their generosity and hospitality are
                        the reason why we would like to be a part of quark once
                        again."
                      </Text>
                    </Box>
                  </TabPanel>
                </TabPanels>
                <Box mt='1em' ms={['5em', '8em', '28em']}>
                  <TabList ms={['0em', '0em', '5.5em']} gap={'2em'}>
                    <Tab
                      w='3px'
                      background={'blackAlpha.700'}
                      _hover={{ background: 'black' }}
                    ></Tab>
                    <Tab
                      w='3px'
                      background={'blackAlpha.700'}
                      _hover={{ background: 'black' }}
                    ></Tab>
                    <Tab
                      w='3px'
                      background={'blackAlpha.700'}
                      _hover={{ background: 'black' }}
                    ></Tab>
                  </TabList>
                </Box>
              </Tabs>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default SponsorshipCTA;
