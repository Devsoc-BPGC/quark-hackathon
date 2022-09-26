import React from 'react';
import {
  Flex,
  Text,
  Image,
  HStack,
  Button,
  VStack,
  Box,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';
import robotGoose from './assets/icons/robogoose4.png';
import mailIcon from './assets/icons/mail.png';
import insta from './assets/icons/instagram.png';
import facebook from './assets/icons/facebook.png';
import twitter from './assets/icons/twitter.png';
const Faq = () => {
  const FAQarr1 = [
    {
      Q: 'Ultrices sagittis orci. Vit ae tempu?',
      A: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut sunt eveniet temporibus quasi! A, ex, ea corporis ipsa nisi dolorem voluptas qui illum sed esse omnis officia repellendus ab?',
    },
    {
      Q: 'Turpis cursus in hac habitasse?',
      A: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut sunt eveniet temporibus quasi! A, ex, ea corporis ipsa nisi dolorem voluptas qui illum sed esse omnis officia repellendus ab?',
    },
    {
      Q: 'Nulla pharetra diam sit amet nisl suscipit?',
      A: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut sunt eveniet temporibus quasi! A, ex, ea corporis ipsa nisi dolorem voluptas qui illum sed esse omnis officia repellendus ab?',
    },
    {
      Q: 'Turpis cursus in hac habitasse?',
      A: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut sunt eveniet temporibus quasi! A, ex, ea corporis ipsa nisi dolorem voluptas qui illum sed esse omnis officia repellendus ab?',
    },
    {
      Q: 'Turpis cursus in hac habitasse?',
      A: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut sunt eveniet temporibus quasi! A, ex, ea corporis ipsa nisi dolorem voluptas qui illum sed esse omnis officia repellendus ab?',
    },
  ];
  const FAQarr2 = [
    {
      Q: 'Ultrices sagittis orci. Vit ae tempu?',
      A: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut sunt eveniet temporibus quasi! A, ex, ea corporis ipsa nisi dolorem voluptas qui illum sed esse omnis officia repellendus ab?',
    },
    {
      Q: 'Turpis cursus in hac habitasse?',
      A: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut sunt eveniet temporibus quasi! A, ex, ea corporis ipsa nisi dolorem voluptas qui illum sed esse omnis officia repellendus ab?',
    },
    {
      Q: 'Nulla pharetra diam sit amet nisl suscipit?',
      A: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut sunt eveniet temporibus quasi! A, ex, ea corporis ipsa nisi dolorem voluptas qui illum sed esse omnis officia repellendus ab?',
    },
    {
      Q: 'Turpis cursus in hac habitasse?',
      A: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut sunt eveniet temporibus quasi! A, ex, ea corporis ipsa nisi dolorem voluptas qui illum sed esse omnis officia repellendus ab?',
    },
    {
      Q: 'Turpis cursus in hac habitasse?',
      A: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut sunt eveniet temporibus quasi! A, ex, ea corporis ipsa nisi dolorem voluptas qui illum sed esse omnis officia repellendus ab?',
    },
  ];
  return (
    <Flex
      bgColor='#EFF8FA'
      fontSize={{ base: '29px', md: '64px' }}
      fontWeight={'700'}
      direction='column'
      h={'981px'}
    >
      <VStack alignItems={'flex-start'}>
        <Text ml={'8vw'} color={'#31433F'} mb={'2.8rem'}>
          Frequently asked questions
        </Text>
        <HStack w='100%' justifyContent={'space-around'} mb={0}>
          <VStack align={'flex-start'} spacing='40px'>
            <Accordion defaultIndex={0} allowToggle>
              {FAQarr1.map(QnA => {
                return (
                  <AccordionItem w='35vw' mb={'1rem'}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        <Text
                          fontSize={'16px'}
                          fontWeight={'700'}
                          lineHeight='24.2px'
                          color={'#183249'}
                        >
                          {QnA.Q}
                        </Text>
                      </Box>
                      <AccordionIcon color={'#009DD9'} />
                    </AccordionButton>
                    <AccordionPanel textAlign='left' pb={4}>
                      <Text
                        fontWeight={'400'}
                        fontSize={'16px'}
                        color={'#183249'}
                      >
                        {QnA.A}
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </VStack>
          <VStack>
            <Accordion defaultIndex={0} allowToggle>
              {FAQarr2.map(QnA => {
                return (
                  <AccordionItem w='35vw' mb={'1rem'}>
                    <AccordionButton>
                      <Box flex='1' textAlign='left'>
                        <Text
                          color={'#183249'}
                          fontSize={'16px'}
                          fontWeight={'700'}
                          lineHeight='24.2px'
                        >
                          {QnA.Q}
                        </Text>
                      </Box>
                      <AccordionIcon color={'#009DD9'} />
                    </AccordionButton>
                    <AccordionPanel pb={4} textAlign='left'>
                      <Text
                        fontWeight={'400'}
                        fontSize={'16px'}
                        color={'#183249'}
                      >
                        {QnA.A}
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </VStack>
        </HStack>
      </VStack>
      <Flex
        h='2049px'
        bgColor={'#183249'}
        fontSize={'16px'}
        clipPath='ellipse(1028px 75% at bottom center)'
        mt={0}
      >
        <VStack
          w='100%'
          alignItems={'center'}
          justifyContent={'end'}
          gap='30px'
          mb={'2.1rem'}
          mt={'1rem'}
        >
          <Image src={robotGoose} alt='roboGoose' h='60px' w='45px' />
          <HStack color='#EFF8FA' fontWeight='400' gap={'1.5rem'}>
            <Text _hover={{ cursor: 'pointer' }}>About the hackathon</Text>
            <Text _hover={{ cursor: 'pointer' }}>Open Source</Text>
            <Text _hover={{ cursor: 'pointer' }}>Privacy Policy</Text>
            <Text _hover={{ cursor: 'pointer' }}>Code of Conduct</Text>
          </HStack>
          <HStack gap={'2rem'}>
            <Button variant={'link'}>
              <Image src={mailIcon} h='20px' w='24px'></Image>
            </Button>
            <Button variant={'link'}>
              <Image src={facebook} h='21px' w='21px'></Image>
            </Button>
            <Button variant={'link'}>
              <Image src={twitter} h='21px' w='21px'></Image>
            </Button>
            <Button variant={'link'}>
              <Image src={insta} h='22px' w='22px'></Image>
            </Button>
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Faq;
