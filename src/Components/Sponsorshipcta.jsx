import React, { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
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
      h={['550px', '580px', '500px']}
      bg='#EFF8FA'
      backgroundRepeat='no-repeat'
      direction={{ base: 'column', md: 'row' }}
    >
      <Box w='full'>
        <Box h='50%'>
          <Box mt={['1.5em', '1em', '4em']} w='full' h='full'>
            <Box w='fit-content'>
              <Heading
                as='h2'
                fontWeight={['700', '700', '700']}
                mt={['5em', '5em', '0em']}
                fontSize={['0.85em', '0.85em', '1em']}
                ms={['0.8em', '2.5em', '4.6em']}
              >
                Sponsor showcase
              </Heading>
            </Box>
            <Box
              w='fit-content'
              ms={['-0.99em', '-0.7em', '1em']}
              mt={['5.5em', '6em', '3em']}
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
