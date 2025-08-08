import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

import TopBanner from "../components/About/TopBanner";
import WhoWeAre from "../components/About/WhoWeAre";
import GrowthStats from "../components/About/GrowthStats";
import ClientsSection from "../components/About/ClientsSection";
import LeadershipCarousel from "../components/About/LeadershipCarousel";

export default function About() {
  const bgColor = useColorModeValue("white", "gray.900");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const cardBg = useColorModeValue("white", "gray.700");
  const sectionBg = useColorModeValue("gray.50", "gray.800");

  return (
    <Box bg={bgColor} color={textColor}>
      {/* Top Banner */}
      <TopBanner />

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* Growth Statistics */}
      <Box bg={sectionBg}>
        <GrowthStats cardBg={cardBg} />
      </Box>

      {/* Client Logos Section */}
      <ClientsSection />

      {/* Leadership Team Carousel */}
      <LeadershipCarousel />
    </Box>
  );
}