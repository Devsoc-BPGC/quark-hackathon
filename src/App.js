import React from 'react';
import { Box, ChakraProvider, theme } from '@chakra-ui/react';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';
import About from './Components/About';
import Stats from './Components/Stats';
import Faq from './Components/Faq';
import OurSponsors from './Components/OurSponsors';
import SponsorshipCTA from './Components/Sponsorshipcta';
import EventsAndUpdates from './Components/EventsAndUpdates';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />

      <Box textAlign='center' fontSize='xl' overflowX={'hidden'}>
        <Home />
        <About />
        <Stats />
        <EventsAndUpdates />
        <SponsorshipCTA />
        <OurSponsors />
        <Faq />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
