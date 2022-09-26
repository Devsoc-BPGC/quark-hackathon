import React from 'react';
import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import About from './Components/About';
import Stats from './Components/Stats';
import Faq from './Components/Faq';
import Prizes from './Components/Prizes';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign='center' fontSize='xl' overflowX={'hidden'}>
        <Navbar />
        <Home />
        <About />
        <Stats />
        <Prizes />
        <Faq />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
