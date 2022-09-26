import React from 'react';
import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import Faq from './Components/Faq';
import Prizes from './Components/Prizes';
import Sponsor from './Components/Sponsors';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign='center' fontSize='xl'>
        <Navbar />
        {/* <Home /> */}
        <Prizes />
        {/* <Sponsor/> */}
        <Faq />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
