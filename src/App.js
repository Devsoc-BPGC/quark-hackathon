import React from 'react';
import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import About from './Components/About';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign='center' fontSize='xl'>
        <Navbar />
        <Home />
        <About />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
