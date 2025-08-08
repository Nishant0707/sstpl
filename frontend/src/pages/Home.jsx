import React from 'react';
import { Box } from '@chakra-ui/react';
import HeroSlider from '../components/Home/HeroSlider';
import AudienceSection from '../components/Home/AudienceSection';
import OfferingsTabs from '../components/Home/OfferingsTabs';
import JoinCTA from '../components/Home/JoinCTA';
import WhySSTPL from '../components/Home/WhySSTPL';
import ExploreContent from '../components/Home/ExploreContent';

const Home = () => {
  return (
    <Box>
      <HeroSlider />
      <AudienceSection />
      <OfferingsTabs />
      <JoinCTA />
      
      <ExploreContent />
      {/* Optionally reusing WhySSTPL again */}
      <WhySSTPL />
    </Box>
  );
};

export default Home;