import React from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  HStack,
  Spacer,
  useDisclosure,
  IconButton,
  VStack,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import insta from './assets/icons/instagram.png';
import facebook from './assets/icons/facebook.png';
import twitter from './assets/icons/twitter.png';
import asset from './assets/icons/Asset.png';

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const Links = [
    { text: 'Home', link: '#home' },
    { text: 'About', link: '#about' },
    { text: 'Stats', link: '#stats' },
    { text: 'Events', link: '#events' },
    { text: 'Sponsors', link: '#sponsorshipcta' },
  ];
  return (
    <Flex
      bg='#183249'
      zIndex={99}
      top={0}
      overflowX={'clip'}
      position={'sticky'}
    >
      <Box w='100%' mt='0.78em'>
        <Flex
          wrap='wrap'
          justifyContent={'center'}
          display={{ base: 'none', lg: 'flex' }}
        >
          <Spacer Width='30vw' minWidth={0} />
          <HStack
            as={'nav'}
            spacing='2rem'
            wrap={'wrap'}
            display={{ base: 'none', lg: 'flex' }}
            mt='0.5em'
            mb='0.3em'
          >
            {Links.map(link => {
              return (
                <Link href={link.link}>
                  <Button variant='link' key={link.text}>
                    <Text fontSize='1.12rem' color='#EFF8FA' fontWeight={'400'}>
                      {link.text}
                    </Text>
                  </Button>
                </Link>
              );
            })}
            <HStack spacing={'1rem'} display={{ base: 'none', lg: 'flex' }}>
              <Link href='https://www.facebook.com/bitsquark/'>
                <Button variant='link'>
                  <Image
                    className='unselectable'
                    src={facebook}
                    _hover={{ background: 'black' }}
                  />
                </Button>
              </Link>
              <Link href='https://twitter.com/bitsquark?lang=en'>
                <Button variant='link'>
                  <Image
                    className='unselectable'
                    src={twitter}
                    _hover={{ background: 'black' }}
                  />
                </Button>
              </Link>
              <Link href='https://www.instagram.com/bitsquark/?hl=en'>
                <Button variant='link'>
                  <Image
                    className='unselectable'
                    src={insta}
                    _hover={{ background: 'black' }}
                    borderRadius='0.4em'
                  />
                </Button>
              </Link>
            </HStack>
            <Box
              w='fit-content'
              h='fit-content'
              border='3px'
              borderStyle='solid'
              borderColor='#EFF8FA'
              borderRadius='100px'
              textAlign={'center'}
            >
              <Button
                borderStyle='solid'
                borderColor='#EFF8FA'
                borderRadius='100px'
                border='3px'
                w='16em'
                h='44px'
                colorScheme='transparent'
                _hover={{ background: 'blue.700' }}
              >
                <Text fontSize='1rem' color='#EFF8FA' fontWeight={'400'}>
                  Interested in sponsoring?
                </Text>
              </Button>
            </Box>
            <Spacer maxWidth='1vw' minWidth={0} />
          </HStack>
        </Flex>

        <Flex
          display={{ lg: 'none' }}
          h='50px'
          alignItems={'center'}
          justifyContent='flex-end'
          w='100vw'
        >
          <HStack justifyContent={'space-around'}>
            <Box ms='1em' display={{ base: 'flex', lg: 'none' }}>
              <Image
                className='unselectable'
                w='40px'
                h='40px'
                src={asset}
              ></Image>
            </Box>
            <Spacer maxW={'5vw'} minW={0} />
            <HStack spacing={'0.75rem'}>
              <Box
                w='fit-content'
                h='fit-content'
                border='3px'
                borderStyle='solid'
                borderColor='#EFF8FA'
                borderRadius='100px'
                textAlign={'center'}
              >
                <Button
                  borderStyle='solid'
                  borderColor='#EFF8FA'
                  borderRadius='100px'
                  border='3px'
                  w={['12em', '15em']}
                  h={['32px', '42px']}
                  colorScheme='transparent'
                  _hover={{ background: 'blue.700' }}
                >
                  <Text fontSize='1rem' color='#EFF8FA' fontWeight={'400'}>
                    Interested in sponsoring?
                  </Text>
                </Button>
              </Box>
              <Box>
                <IconButton
                  variant='unstyled'
                  color='#EFF8FA'
                  bg='transparent'
                  size={'lg'}
                  icon={
                    isOpen ? (
                      <HamburgerIcon
                        boxSize={8}
                        transform={'rotate(-90deg)'}
                        transitionDuration={'0.8s'}
                      />
                    ) : (
                      <HamburgerIcon boxSize={7} transitionDuration={'0.8s'} />
                    )
                  }
                  aria-label={'Open Menu'}
                  display={{ lg: 'none' }}
                  onClick={isOpen ? onClose : onOpen}
                />
              </Box>
            </HStack>
          </HStack>
        </Flex>
      </Box>
      <Box
        overflowX={'hidden'}
        fontWeight={700}
        fontSize='20px'
        bg='blackAlpha.900'
        mt='0.3em'
        height={'fit-content'}
        display={{ lg: 'none' }}
        pb={4}
        pr={8}
        position={'absolute'}
        top={'3.5rem'}
        width={'100%'}
        zIndex={2}
        left={isOpen ? '0' : '100%'}
        transitionDuration={'1s'}
        onClick={onClose}
      >
        <Flex
          justifyContent={'end'}
          alignItems={'center'}
          display={{ lg: 'none' }}
        >
          <VStack alignItems={'center'} as={'nav'} spacing={4}>
            {Links.map(link => (
              <Box mt='2.5em'>
                <Link href={link.link}>
                  <Button variant='link' key={link.text} href={link.link}>
                    <Text fontSize='1rem' color='#EFF8FA'>
                      {link.text}
                    </Text>
                  </Button>
                </Link>
              </Box>
            ))}
          </VStack>
        </Flex>
      </Box>
    </Flex>
  );
};
