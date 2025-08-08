import React from 'react';
import { Box, VStack, Heading, Text, Button, useBreakpointValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionVStack = motion(VStack);

const Mainbanner = () => {
  const sliderHeight = useBreakpointValue({ base: '60vh', md: '50vh' });

  return (
    <Box
      h={sliderHeight}
      position="relative"
      backgroundImage="url('/hero/hero1.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      overflow="hidden"
    >
      {/* Overlay for readability */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bgGradient="linear(to-b, blackAlpha.800, blackAlpha.600)"
        zIndex={1}
      />

      {/* Animated text content */}
      <MotionVStack
        position="absolute"
        top="10%"
        left="20%"
        transform="translate(-50%, -50%)"
        textAlign="center"
        spacing={6}
        zIndex={2}
        maxW="800px"
        px={{ base: 6, md: 0 }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <Heading
          fontSize={{ base: '3xl', md: '5xl' }}
          color="white"
          textShadow="0 4px 24px rgba(0,0,0,0.8)"
          fontWeight="extrabold"
        >
          An NCVET-approved agency, delivering trusted skill assessments workforce.
        </Heading>
        <Text
          fontSize={{ base: 'md', md: 'xl' }}
          color="whiteAlpha.900"
          textShadow="0 2px 18px rgba(0,0,0,0.7)"
          fontWeight="semibold"
        >
          Skill Development Across India
        </Text>

      </MotionVStack>
    </Box>
  );
};

export default Mainbanner;
