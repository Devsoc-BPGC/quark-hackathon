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
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import robotGoose from './assets/icons/robogoose4.png';
import buttonIcon from './assets/icons/ButtonIcon.png';
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

  const FAQarr3 = [...FAQarr1, ...FAQarr2];
  return (
    <Flex
      id='faq'
      bgColor='#EFF8FA'
      fontSize={{ base: '29px', md: '64px' }}
      fontWeight={'700'}
      direction='column'
    >
      <VStack alignItems={'flex-start'}>
        <Text align={'left'} ml={'8vw'} color={'#31433F'} mb={'2.8rem'}>
          Frequently asked questions
        </Text>
        <Flex
          display={{ base: 'flex', md: 'none' }}
          direction={'column'}
          w='100%'
          justifyContent={'space-around'}
          alignItems={'center'}
          mb={0}
        >
          <VStack align={'flex-start'} spacing='40px'>
            <Accordion defaultIndex={0} allowToggle>
              {FAQarr3.map(QnA => {
                return (
                  <AccordionItem w={{ base: '80vw', md: '35vw' }} mb={'1rem'}>
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
        </Flex>
        <Flex
          display={{ base: 'none', md: 'flex' }}
          w='100%'
          justifyContent={'space-around'}
          alignItems={'center'}
          mb={0}
        >
          <VStack align={'flex-start'} spacing='40px'>
            <Accordion defaultIndex={0} allowToggle>
              {FAQarr1.map(QnA => {
                return (
                  <AccordionItem w={{ base: '80vw', md: '35vw' }} mb={'1rem'}>
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
                  <AccordionItem w={{ base: '80vw', md: '35vw' }} mb={'1rem'}>
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
        </Flex>
      </VStack>
      <Flex
        h='500px'
        bgColor={'#183249'}
        fontSize={'16px'}
        clipPath={['ellipse(1100px 75% at bottom center)']}
        mt={0}
      >
        <VStack
          w='100%'
          bgColor={'#183249'}
          alignItems={'center'}
          justifyContent={'end'}
          gap='30px'
          mb={'2.1rem'}
          mt={'1rem'}
          clipPath='ellipse(2049px 70% at bottom center)'
        >
          <Image
            zIndex={1}
            src={robotGoose}
            alt='roboGoose'
            h='60px'
            w='45px'
            _hover={{ cursor: 'pointer' }}
          />
          <HStack
            color='#EFF8FA'
            fontWeight='400'
            gap={'1.3rem'}
            wrap={'wrap'}
            w={{ base: '320px', md: 'fit-content' }}
          >
            <Text _hover={{ cursor: 'pointer' }}>About the hackathon</Text>
            <Text _hover={{ cursor: 'pointer' }}>
              &#160;&#160;&#160;&#160;&#160;&#160;Open Source
            </Text>
            <Text _hover={{ cursor: 'pointer' }}>Privacy Policy</Text>
            <Text _hover={{ cursor: 'pointer' }}>
              &#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;Code of Conduct
            </Text>
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
          <InputGroup
            w={{ base: '299px', md: '658px' }}
            borderRadius={'100px'}
            bgColor={'#EFF8FA'}
            border={'3px'}
            borderStyle={'solid'}
            borderColor={'#009DD9'}
          >
            <Input
              color={'black'}
              w={{ base: '350px', md: '600px' }}
              display={{ base: 'block', md: 'none' }}
              borderRadius={'100px'}
              border={0}
              h={{ base: '42px', md: '46px' }}
              focusBorderColor={'#EFF8FA'}
              _placeholder={{
                color: '#183249',
                wrap: 'wrap',
                lineHeight: '16px',
                fontSize: '10px',
                whiteSpace: 'pre-line',
                position: 'relative',
                top: '-9px',
                fontWeight: '300',
              }}
              placeholder='Enter your email address to be the first to know when applications open'
            />
            <Input
              color={'black'}
              display={{ base: 'none', md: 'block' }}
              w={{ base: '250px', md: '600px' }}
              borderRadius={'100px'}
              border={0}
              h={{ base: '42px', md: '46px' }}
              focusBorderColor={'#EFF8FA'}
              _placeholder={{ color: '#183249', fontWeight: '300' }}
              placeholder='Enter your email address to be the first to know when applications open'
            />
            <InputRightElement w={'50px'} h={'46px'}>
              <Button
                borderRadius={'50%'}
                w={{ base: '40px', md: '46px' }}
                h={{ base: '40px', md: '46px' }}
                p={0}
              >
                <Image
                  h={{ base: '40px', md: '46px' }}
                  w={{ base: '40px', md: '46px' }}
                  src={buttonIcon}
                  mb={{ base: '0.2em', md: '0.01em' }}
                />
              </Button>
            </InputRightElement>
          </InputGroup>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Faq;
