import React from 'react';
import { Link, Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg='#183249' p='1.4em'>
      <Text color='#EFF8FA'>
        Made with ❤️ by{' '}
        <Link href='https://devsoc.club' color={'blue'}>
          DevSoc
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
