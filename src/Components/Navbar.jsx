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
    { text: 'Events', link: '' },
    { text: 'Prizes', link: '' },
    { text: 'Sponsors', link: '' },
  ];
  return (
    <Flex bg='#183249' zIndex={99} top={0} overflowX={'clip'} position='sticky'>
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
                <Button variant='link' key={link.text}>
                  <Text fontSize='1.12rem' color='#EFF8FA' fontWeight={'400'}>
                    {link.text}
                  </Text>
                </Button>
              );
            })}
            <HStack spacing={'1rem'} display={{ base: 'none', lg: 'flex' }}>
              <Button variant='link'>
                <Image src={facebook} />
              </Button>
              <Button variant='link'>
                <Image src={twitter} />
              </Button>
              <Button variant='link'>
                <Image src={insta} />
              </Button>
            </HStack>
            <Box
              w='256px'
              h='46px'
              border='3px'
              borderStyle='solid'
              borderColor='#EFF8FA'
              borderRadius='100px'
              _hover={{ cursor: 'pointer', background: '#000' }}
            >
              <Button
                backgroundColor='transparent'
                variant='link'
                _hover={{ cursor: 'pointer', color: '#000' }}
              >
                <Text
                  fontSize='1rem'
                  color='#EFF8FA'
                  fontWeight={'400'}
                  mt='0.4em'
                  _hover={{ cursor: 'pointer' }}
                >
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
            <Box display={{ base: 'flex', lg: 'none' }}>
              <Image w='40px' h='40px' src={asset}></Image>
            </Box>
            <Spacer maxW={'5vw'} minW={0} />
            <HStack spacing={'0.75rem'}>
              <Box
                w='200px'
                h='40px'
                border='3px'
                borderStyle='solid'
                borderColor='#EFF8FA'
                borderRadius='100px'
                _hover={{ cursor: 'pointer', background: '#000' }}
              >
                <Button
                  backgroundColor='transparent'
                  variant='link'
                  _hover={{ cursor: 'pointer', color: '#000' }}
                >
                  <Text fontSize='1rem' mt='0.2em' color='#EFF8FA'>
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
                      <HamburgerIcon boxSize={8} transitionDuration={'0.8s'} />
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
        fontWeight={700}
        fontSize='20px'
        bg='blackAlpha.900'
        height={'calc(100vh - 12rem)'}
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
              <Button variant='link' key={link.text}>
                <Text fontSize='1.8rem' color='#EFF8FA'>
                  {link.text}
                </Text>
              </Button>
            ))}
          </VStack>
        </Flex>
      </Box>
    </Flex>
  );
};
