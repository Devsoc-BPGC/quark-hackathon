import React, { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  Image,
  Hide,
  Show,
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

  const handleSliderChange = event => {
    setTabIndex(parseInt(event.target.value, 10));
  };

  const handleTabsChange = index => {
    setTabIndex(index);
  };

  return (
    <Flex
      id='about'
      h={['670px', '670px', '900px']}
      bg='#EFF8FA'
      backgroundRepeat='no-repeat'
      direction={{ base: 'column', md: 'row' }}
    >
      <Box w='full'>
        <Box h='50%'>
          <Box w='full' h='full'>
            <Box align='left' mt='4em' ms='4em' w='29em'>
              <Heading
                color={'#31433F'}
                as='h1'
                fontWeight={'670'}
                fontSize='2.9em'
              >
                Sponsor a special weekend
              </Heading>
            </Box>
            <Box align='left' mt='1.5em' ms='5em' w='42em' fontSize={'0.8em'}>
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
            <Box mt='2em' w='fit-content' ms='4em'>
              <Button
                w='18em'
                h='3em'
                _hover={{ bg: 'black' }}
                borderRadius='10em'
                bg='#183249'
              >
                <Text
                  fontWeight={'380'}
                  color={'#EFF8FA'}
                  _hover={{ cursor: 'pointer' }}
                >
                  Contact our sponsorship team
                </Text>
              </Button>
            </Box>
            <Box w='fit-content' ms='auto' mt='-14.5em' me='6em'>
              <Image src={girl}></Image>
            </Box>
          </Box>
          <Box mt='-1.3em' w='full' h='full'>
            <Box w='fit-content'>
              <Heading as='h2' fontWeight={'600'} fontSize='1em' ms='3em'>
                Sponsor showcase
              </Heading>
            </Box>
            <Box w='fit-content' ms='1em' mt='5em'>
              <Tabs index={tabIndex} onChange={handleTabsChange}>
                <TabPanels>
                  <TabPanel>
                    <Image ms='7em' src={sponsorLogo}></Image>
                    <Box
                      h='9em'
                      align='left'
                      bg='white'
                      w='36em'
                      mt='-7em'
                      ms='25em'
                      boxShadow='0px 20px 25px -5px #7ab4c5, 0px 20px 20px -5px #7ab4c5'
                    >
                      <Text
                        ms='2em'
                        pt='2.4em'
                        pe='2em'
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
                        ms='2em'
                        mt='7em'
                        color='#009DD9'
                        fontSize={'0.75em'}
                      >
                        Sponsor provided link >
                      </Link>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Image ms='7em' src={sponsorLogo}></Image>
                    <Box
                      h='9em'
                      align='left'
                      bg='white'
                      w='36em'
                      mt='-7em'
                      ms='25em'
                      boxShadow='0px 20px 25px -5px #7ab4c5, 0px 20px 20px -5px #7ab4c5'
                    >
                      <Text
                        ms='2em'
                        pt='2.4em'
                        pe='2em'
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
                        ms='2em'
                        mt='7em'
                        color='#009DD9'
                        fontSize={'0.75em'}
                      >
                        Sponsor provided link >
                      </Link>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Image ms='7em' src={sponsorLogo}></Image>
                    <Box
                      h='9em'
                      align='left'
                      bg='white'
                      w='36em'
                      mt='-7em'
                      ms='25em'
                      boxShadow='0px 20px 25px -5px #7ab4c5, 0px 20px 20px -5px #7ab4c5'
                    >
                      <Text
                        ms='2em'
                        pt='2.4em'
                        pe='2em'
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
                        ms='2em'
                        mt='7em'
                        color='#009DD9'
                        fontSize={'0.75em'}
                      >
                        Sponsor provided link >
                      </Link>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Image ms='7em' src={sponsorLogo}></Image>
                    <Box
                      h='9em'
                      align='left'
                      bg='white'
                      w='36em'
                      mt='-7em'
                      ms='25em'
                      boxShadow='0px 20px 25px -5px #7ab4c5, 0px 20px 20px -5px #7ab4c5'
                    >
                      <Text
                        ms='2em'
                        pt='2.4em'
                        pe='2em'
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
                        ms='2em'
                        mt='7em'
                        color='#009DD9'
                        fontSize={'0.75em'}
                      >
                        Sponsor provided link >
                      </Link>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Image ms='7em' src={sponsorLogo}></Image>
                    <Box
                      h='9em'
                      align='left'
                      bg='white'
                      w='36em'
                      mt='-7em'
                      ms='25em'
                      boxShadow='0px 20px 25px -5px #7ab4c5, 0px 20px 20px -5px #7ab4c5'
                    >
                      <Text
                        ms='2em'
                        pt='2.4em'
                        pe='2em'
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
                        ms='2em'
                        mt='7em'
                        color='#009DD9'
                        fontSize={'0.75em'}
                      >
                        Sponsor provided link >
                      </Link>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Image ms='7em' src={sponsorLogo}></Image>
                    <Box
                      h='9em'
                      align='left'
                      bg='white'
                      w='36em'
                      mt='-7em'
                      ms='25em'
                      boxShadow='0px 20px 25px -5px #7ab4c5, 0px 20px 20px -5px #7ab4c5'
                    >
                      <Text
                        ms='2em'
                        pt='2.4em'
                        pe='2em'
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
                        ms='2em'
                        mt='7em'
                        color='#009DD9'
                        fontSize={'0.75em'}
                      >
                        Sponsor provided link >
                      </Link>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Image ms='7em' src={sponsorLogo}></Image>
                    <Box
                      h='9em'
                      align='left'
                      bg='white'
                      w='36em'
                      mt='-7em'
                      ms='25em'
                      boxShadow='0px 20px 25px -5px #7ab4c5, 0px 20px 20px -5px #7ab4c5'
                    >
                      <Text
                        ms='2em'
                        pt='2.4em'
                        pe='2em'
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
                        ms='2em'
                        mt='7em'
                        color='#009DD9'
                        fontSize={'0.75em'}
                      >
                        Sponsor provided link >
                      </Link>
                    </Box>
                  </TabPanel>
                  <TabPanel>
                    <Image ms='7em' src={sponsorLogo}></Image>
                    <Box
                      h='9em'
                      align='left'
                      bg='white'
                      w='36em'
                      mt='-7em'
                      ms='25em'
                      boxShadow='0px 20px 25px -5px #7ab4c5, 0px 20px 20px -5px #7ab4c5'
                    >
                      <Text
                        ms='2em'
                        pt='2.4em'
                        pe='2em'
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
                        ms='2em'
                        mt='7em'
                        color='#009DD9'
                        fontSize={'0.75em'}
                      >
                        Sponsor provided link >
                      </Link>
                    </Box>
                  </TabPanel>
                </TabPanels>
                <Box mt='-1.3em' align='center' ms='18.5em'>
                  <TabList w='fit-content' ms='0.3em'>
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
