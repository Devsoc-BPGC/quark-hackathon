import React, { useState } from 'react';
import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Button,
  Link,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import girl from './assets/icons/girldraw.svg';
import sponsorLogo from './assets/icons/sponsorSlider.svg';

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
                _hover={{ bg: 'black' }}
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
                fontWeight={['620', '620', '600']}
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
              <Tabs index={tabIndex} onChange={handleTabsChange}>
                <TabPanels>
                  <TabPanel>
                    <Image
                      mt={['-4.5em', '-4.5em', '1em']}
                      ms={['2em', '2em', '7em']}
                      w={['6em', '6em', '11em']}
                      src={sponsorLogo}
                    ></Image>
                    <Box
                      h={['14em', '15em', '9em']}
                      align='left'
                      bg='white'
                      w={['15.5em', '18em', '36em']}
                      mt={['1.5em', '1.5em', '-7em']}
                      ms={['1.5em', '1.5em', '25em']}
                      boxShadow='0px 20px 25px -5px #7ab4c5, 0px 20px 20px -5px #7ab4c5'
                    >
                      <Text
                        ms={['0.8em', '0.8em', '2em']}
                        pt='2.4em'
                        pe={['0em', '0em', '2em']}
                        pb='1em'
                        fontSize={'0.75em'}
                        fontWeight='500'
                      >
                        “Morbi eu sollicitudin sem. Suspendisse ultricies lacus
                        et nisl molestie, laoreet lobortis erat molestie. Sed
                        sapien tortor, interdum ut magna vitae, finibus
                        fermentum mauris. Donec aliquet massa ac quam
                        consectetur, nec porttitor justo herndrerierte.”
                      </Text>
                      <Link
                        ms={['0.8em', '0.8em', '2em']}
                        mt='7em'
                        color='#009DD9'
                        fontSize={'0.75em'}
                      >
                        Sponsor provided link {'>'}
                      </Link>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Image
                      mt={['-4.5em', '-4.5em', '1em']}
                      ms={['2em', '2em', '7em']}
                      w={['6em', '6em', '11em']}
                      src={sponsorLogo}
                    ></Image>
                    <Box
                      h={['14em', '15em', '9em']}
                      align='left'
                      bg='white'
                      w={['15.5em', '18em', '36em']}
                      mt={['1.5em', '1.5em', '-7em']}
                      ms={['1.5em', '1.5em', '25em']}
                      boxShadow='0px 20px 25px -5px #7ab4c5, 0px 20px 20px -5px #7ab4c5'
                    >
                      <Text
                        ms={['0.8em', '0.8em', '2em']}
                        pt='2.4em'
                        pe={['0em', '0em', '2em']}
                        pb='1em'
                        fontSize={'0.75em'}
                        fontWeight='500'
                      >
                        “Morbi eu sollicitudin sem. Suspendisse ultricies lacus
                        et nisl molestie, laoreet lobortis erat molestie. Sed
                        sapien tortor, interdum ut magna vitae, finibus
                        fermentum mauris. Donec aliquet massa ac quam
                        consectetur, nec porttitor justo herndrerierte.”
                      </Text>
                      <Link
                        ms={['0.8em', '0.8em', '2em']}
                        mt='7em'
                        color='#009DD9'
                        fontSize={'0.75em'}
                      >
                        Sponsor provided link {'>'}
                      </Link>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Image
                      mt={['-4.5em', '-4.5em', '1em']}
                      ms={['2em', '2em', '7em']}
                      w={['6em', '6em', '11em']}
                      src={sponsorLogo}
                    ></Image>
                    <Box
                      h={['14em', '15em', '9em']}
                      align='left'
                      bg='white'
                      w={['15.5em', '18em', '36em']}
                      mt={['1.5em', '1.5em', '-7em']}
                      ms={['1.5em', '1.5em', '25em']}
                      boxShadow='0px 20px 25px -5px #7ab4c5, 0px 20px 20px -5px #7ab4c5'
                    >
                      <Text
                        ms={['0.8em', '0.8em', '2em']}
                        pt='2.4em'
                        pe={['0em', '0em', '2em']}
                        pb='1em'
                        fontSize={'0.75em'}
                        fontWeight='500'
                      >
                        “Morbi eu sollicitudin sem. Suspendisse ultricies lacus
                        et nisl molestie, laoreet lobortis erat molestie. Sed
                        sapien tortor, interdum ut magna vitae, finibus
                        fermentum mauris. Donec aliquet massa ac quam
                        consectetur, nec porttitor justo herndrerierte.”
                      </Text>
                      <Link
                        ms={['0.8em', '0.8em', '2em']}
                        mt='7em'
                        color='#009DD9'
                        fontSize={'0.75em'}
                      >
                        Sponsor provided link {'>'}
                      </Link>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Image
                      mt={['-4.5em', '-4.5em', '1em']}
                      ms={['2em', '2em', '7em']}
                      w={['6em', '6em', '11em']}
                      src={sponsorLogo}
                    ></Image>
                    <Box
                      h={['14em', '15em', '9em']}
                      align='left'
                      bg='white'
                      w={['15.5em', '18em', '36em']}
                      mt={['1.5em', '1.5em', '-7em']}
                      ms={['1.5em', '1.5em', '25em']}
                      boxShadow='0px 20px 25px -5px #7ab4c5, 0px 20px 20px -5px #7ab4c5'
                    >
                      <Text
                        ms={['0.8em', '0.8em', '2em']}
                        pt='2.4em'
                        pe={['0em', '0em', '2em']}
                        pb='1em'
                        fontSize={'0.75em'}
                        fontWeight='500'
                      >
                        “Morbi eu sollicitudin sem. Suspendisse ultricies lacus
                        et nisl molestie, laoreet lobortis erat molestie. Sed
                        sapien tortor, interdum ut magna vitae, finibus
                        fermentum mauris. Donec aliquet massa ac quam
                        consectetur, nec porttitor justo herndrerierte.”
                      </Text>
                      <Link
                        ms={['0.8em', '0.8em', '2em']}
                        mt='7em'
                        color='#009DD9'
                        fontSize={'0.75em'}
                      >
                        Sponsor provided link {'>'}
                      </Link>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Image
                      mt={['-4.5em', '-4.5em', '1em']}
                      ms={['2em', '2em', '7em']}
                      w={['6em', '6em', '11em']}
                      src={sponsorLogo}
                    ></Image>
                    <Box
                      h={['14em', '15em', '9em']}
                      align='left'
                      bg='white'
                      w={['15.5em', '18em', '36em']}
                      mt={['1.5em', '1.5em', '-7em']}
                      ms={['1.5em', '1.5em', '25em']}
                      boxShadow='0px 20px 25px -5px #7ab4c5, 0px 20px 20px -5px #7ab4c5'
                    >
                      <Text
                        ms={['0.8em', '0.8em', '2em']}
                        pt='2.4em'
                        pe={['0em', '0em', '2em']}
                        pb='1em'
                        fontSize={'0.75em'}
                        fontWeight='500'
                      >
                        “Morbi eu sollicitudin sem. Suspendisse ultricies lacus
                        et nisl molestie, laoreet lobortis erat molestie. Sed
                        sapien tortor, interdum ut magna vitae, finibus
                        fermentum mauris. Donec aliquet massa ac quam
                        consectetur, nec porttitor justo herndrerierte.”
                      </Text>
                      <Link
                        ms={['0.8em', '0.8em', '2em']}
                        mt='7em'
                        color='#009DD9'
                        fontSize={'0.75em'}
                      >
                        Sponsor provided link {'>'}
                      </Link>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Image
                      mt={['-4.5em', '-4.5em', '1em']}
                      ms={['2em', '2em', '7em']}
                      w={['6em', '6em', '11em']}
                      src={sponsorLogo}
                    ></Image>
                    <Box
                      h={['14em', '15em', '9em']}
                      align='left'
                      bg='white'
                      w={['15.5em', '18em', '36em']}
                      mt={['1.5em', '1.5em', '-7em']}
                      ms={['1.5em', '1.5em', '25em']}
                      boxShadow='0px 20px 25px -5px #7ab4c5, 0px 20px 20px -5px #7ab4c5'
                    >
                      <Text
                        ms={['0.8em', '0.8em', '2em']}
                        pt='2.4em'
                        pe={['0em', '0em', '2em']}
                        pb='1em'
                        fontSize={'0.75em'}
                        fontWeight='500'
                      >
                        “Morbi eu sollicitudin sem. Suspendisse ultricies lacus
                        et nisl molestie, laoreet lobortis erat molestie. Sed
                        sapien tortor, interdum ut magna vitae, finibus
                        fermentum mauris. Donec aliquet massa ac quam
                        consectetur, nec porttitor justo herndrerierte.”
                      </Text>
                      <Link
                        ms={['0.8em', '0.8em', '2em']}
                        mt='7em'
                        color='#009DD9'
                        fontSize={'0.75em'}
                      >
                        Sponsor provided link {'>'}
                      </Link>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Image
                      mt={['-4.5em', '-4.5em', '1em']}
                      ms={['2em', '2em', '7em']}
                      w={['6em', '6em', '11em']}
                      src={sponsorLogo}
                    ></Image>
                    <Box
                      h={['14em', '15em', '9em']}
                      align='left'
                      bg='white'
                      w={['15.5em', '18em', '36em']}
                      mt={['1.5em', '1.5em', '-7em']}
                      ms={['1.5em', '1.5em', '25em']}
                      boxShadow='0px 20px 25px -5px #7ab4c5, 0px 20px 20px -5px #7ab4c5'
                    >
                      <Text
                        ms={['0.8em', '0.8em', '2em']}
                        pt='2.4em'
                        pe={['0em', '0em', '2em']}
                        pb='1em'
                        fontSize={'0.75em'}
                        fontWeight='500'
                      >
                        “Morbi eu sollicitudin sem. Suspendisse ultricies lacus
                        et nisl molestie, laoreet lobortis erat molestie. Sed
                        sapien tortor, interdum ut magna vitae, finibus
                        fermentum mauris. Donec aliquet massa ac quam
                        consectetur, nec porttitor justo herndrerierte.”
                      </Text>
                      <Link
                        ms={['0.8em', '0.8em', '2em']}
                        mt='7em'
                        color='#009DD9'
                        fontSize={'0.75em'}
                      >
                        Sponsor provided link {'>'}
                      </Link>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Image
                      mt={['-4.5em', '-4.5em', '1em']}
                      ms={['2em', '2em', '7em']}
                      w={['6em', '6em', '11em']}
                      src={sponsorLogo}
                    ></Image>
                    <Box
                      h={['14em', '15em', '9em']}
                      align='left'
                      bg='white'
                      w={['15.5em', '18em', '36em']}
                      mt={['1.5em', '1.5em', '-7em']}
                      ms={['1.5em', '1.5em', '25em']}
                      boxShadow='0px 20px 25px -5px #7ab4c5, 0px 20px 20px -5px #7ab4c5'
                    >
                      <Text
                        ms={['0.8em', '0.8em', '2em']}
                        pt='2.4em'
                        pe={['0em', '0em', '2em']}
                        pb='1em'
                        fontSize={'0.75em'}
                        fontWeight='500'
                      >
                        “Morbi eu sollicitudin sem. Suspendisse ultricies lacus
                        et nisl molestie, laoreet lobortis erat molestie. Sed
                        sapien tortor, interdum ut magna vitae, finibus
                        fermentum mauris. Donec aliquet massa ac quam
                        consectetur, nec porttitor justo herndrerierte.”
                      </Text>
                      <Link
                        ms={['0.8em', '0.8em', '2em']}
                        mt='7em'
                        color='#009DD9'
                        fontSize={'0.75em'}
                      >
                        Sponsor provided link {'>'}
                      </Link>
                    </Box>
                  </TabPanel>
                </TabPanels>
                <Box mt='-1.3em' align='center' ms={['0em', '0em', '18.5em']}>
                  <TabList
                    w={['0em', 'fit-content', 'fit-content']}
                    ms={['-17em', '1.5em', '0.3em']}
                  >
                    <Tab
                      _active={{ background: 'transparent' }}
                      fontSize={'2em'}
                      fontWeight='900'
                    >
                      .
                    </Tab>
                    <Tab
                      _active={{ background: 'transparent' }}
                      fontSize={'2em'}
                      fontWeight='900'
                    >
                      .
                    </Tab>
                    <Tab
                      _active={{ background: 'transparent' }}
                      fontSize={'2em'}
                      fontWeight='900'
                    >
                      .
                    </Tab>
                    <Tab
                      _active={{ background: 'transparent' }}
                      fontSize={'2em'}
                      fontWeight='900'
                    >
                      .
                    </Tab>
                    <Tab
                      _active={{ background: 'transparent' }}
                      fontSize={'2em'}
                      fontWeight='900'
                    >
                      .
                    </Tab>
                    <Tab
                      _active={{ background: 'transparent' }}
                      fontSize={'2em'}
                      fontWeight='900'
                    >
                      .
                    </Tab>
                    <Tab
                      _active={{ background: 'transparent' }}
                      fontSize={'2em'}
                      fontWeight='900'
                    >
                      .
                    </Tab>
                    <Tab
                      _active={{ background: 'transparent' }}
                      fontSize={'2em'}
                      fontWeight='900'
                    >
                      .
                    </Tab>
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
