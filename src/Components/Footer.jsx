import React from 'react';
import { Link, Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg='#2B4C63 98.96%' p='1em' h='50px'>
      <Text color='#EFF8FA'>
        Made with ❤️ by{' '}
        <Link href='https://devsoc.club' color={'white'}>
          DevSoc
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
