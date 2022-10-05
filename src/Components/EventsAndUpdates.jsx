import {
  Flex,
  HStack,
  VStack,
  Text,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import React from 'react';
import engineering from './assets/icons/engineering.svg';
import Calendar from './assets/icons/Calendar.png';

const EventsAndUpdates = () => {
  return (
    <Flex
      bgGradient={'linear-gradient(180deg, #384257 0%, #2B4C63 98.96%);'}
      pb={'1rem'}
    >
      <Flex
        justifyContent={'space-around'}
        direction={{ base: 'column', lg: 'row' }}
        alignItems={{ base: 'center', lg: 'flex-start' }}
      >
        <VStack
          alignItems={'flex-start'}
          ml={{ base: '1rem', md: '5rem' }}
          w={{ base: '90%', md: '70%', lg: '42%' }}
          gap={{ base: '4rem', md: '10rem' }}
        >
          <Flex alignItems={'flex-start'} direction={'column'} mt={'1rem'}>
            <Box textAlign={'left'}>
              <Text
                fontSize={{ base: '29px', md: '64px' }}
                fontWeight={'700'}
                lineHeight={'70.9px'}
                color={'#FFFFFF'}
              >
                Events &#38; Updates
              </Text>
              <Text
                fontSize={{ base: '12px', md: '16px' }}
                fontWeight={'600'}
                lineHeight={'30px'}
                color={'#FFFFFF'}
              >
                CODE | DESIGN | ENGINEER{' '}
              </Text>
            </Box>
          </Flex>
          <VStack
            alignItems={'flex-start'}
            gap={{ base: '1rem', md: '4.5rem' }}
          >
            <Image
              src={engineering}
              ml={{ base: '1.5rem', md: '0' }}
              w={{ base: '281.16', md: '426px' }}
              h={{ base: '165.66px', md: '251px' }}
            />
            <Text
              fontSize={'16px'}
              fontWeight={'400'}
              textAlign={'justify'}
              color={'#EFF8FA'}
            >
              The hackathon is a 48 hour event consisting of talks, API demo
              sessions, socializing sessions and of course a 36 hour hacking
              session. The initial 6 hours will consist of talks and API demo
              sessions after which hacking starts. The 36 hours hacking session
              will be followed by an evaluation of every team’s hack by a panel
              of judges. The panel will decide the top-3 teams which will be
              announced at the spot. Any sponsored special prizes will require
              teams to go to the sponsor's booth individually and demonstrate
              their hack to the sponsor. These prizes are at the complete
              discretion of the organisation sponsoring them and there is no
              guarantee if there will be prizes given, if any.
            </Text>
          </VStack>
        </VStack>
        <Tabs align='center' variant={'soft-rounded'}>
          <TabPanels>
            <TabPanel>
              <Box
                textAlign={'left'}
                bgColor={'#EFF8FA'}
                h={{ base: '758px', md: '632px' }}
                w={{ base: '288px', md: '480px' }}
                boxShadow={'-9px 10px 0px rgba(44, 135, 161, 0.6)'}
                borderRadius={'8px'}
                color={'black'}
              >
                <VStack
                  alignItems={'flex-start'}
                  m={'2rem'}
                  gap={'2rem'}
                  w={'70%'}
                >
                  <Text
                    mt={'3rem'}
                    fontWeight={'500'}
                    fontSize={{ base: '16px', md: '18px' }}
                  >
                    Round 1: Curriculum Vitae submission
                  </Text>
                  <VStack alignItems={'flex-start'}>
                    <Text fontWeight={'400'} fontSize={'14px'}>
                      In this round you have to form a team 3-4 members. After
                      creating the team each member has to submit their CV.
                    </Text>
                    <Text fontWeight={'400'} fontSize={'14px'}>
                      CV must contain:
                    </Text>
                    <UnorderedList fontWeight={'400'} fontSize={'14px'}>
                      <ListItem ml={'3.5rem'} mt={'0.5rem'}>
                        Projects worked on till date with GIThub links
                      </ListItem>
                      <ListItem ml={'3.5rem'} mt={'0.5rem'}>
                        Internships
                      </ListItem>
                      <ListItem ml={'3.5rem'} mt={'0.5rem'}>
                        Technical Position of Responsibilty
                      </ListItem>
                      <ListItem ml={'3.5rem'} mt={'0.5rem'}>
                        Any other technical achievements
                      </ListItem>
                    </UnorderedList>
                  </VStack>
                  <HStack>
                    <Image src={Calendar} />
                    <Text fontWeight={'400'} fontSize={'14px'}>
                      December 10 - 15,2022
                    </Text>
                  </HStack>
                </VStack>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box
                textAlign={'left'}
                bgColor={'#EFF8FA'}
                h={{ base: '758px', md: '632px' }}
                w={{ base: '288px', md: '480px' }}
                boxShadow={'-9px 10px 0px rgba(44, 135, 161, 0.6)'}
                borderRadius={'8px'}
                color={'black'}
              >
                <VStack
                  alignItems={'flex-start'}
                  m={'2rem'}
                  gap={'2rem'}
                  w={'70%'}
                >
                  <Text
                    fontWeight={'500'}
                    fontSize={{ base: '16px', md: '18px' }}
                    mt={'3rem'}
                  >
                    Round 2: Hackathon
                  </Text>
                  <Text fontWeight={'400'} fontSize={'14px'}>
                    The hackathon is a 48 hour event consisting of talks, API
                    demo sessions, socializing sessions. The initial 6 hours
                    will consist of talks and API demo sessions after which
                    hacking starts. The 36 hours hacking session will be
                    followed by an evaluation of every team’s hack by a panel of
                    judges. The panel will decide the top-3 teams which will be
                    announced at the spot. Any sponsored special prizes will
                    require teams to go to the sponsor's booth individually and
                    demonstrate their hack to the sponsor.
                  </Text>

                  <HStack>
                    <Image src={Calendar} />
                    <Text fontWeight={'400'} fontSize={'14px'}>
                      February 11 - 13,2023
                    </Text>
                  </HStack>
                </VStack>
              </Box>
            </TabPanel>
          </TabPanels>
          <TabList>
            <Tab w={'100px'} bgColor={'whiteAlpha.400'}></Tab>
            <Tab w={'100px'} bgColor={'whiteAlpha.400'}></Tab>
          </TabList>
        </Tabs>
      </Flex>
    </Flex>
  );
};

export default EventsAndUpdates;
