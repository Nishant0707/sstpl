import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import AssSelect from '../components/Assess/AssSelect';
import Brandlogo from '../components/Assess/Brandlogo';


const MotionBox = motion.create(Box);

const Assessment = () => {
  const headingSize = useBreakpointValue({ base: '3xl', md: '4xl', lg: '5xl' });

  return (
    <Box bg="gray.900" minH="100vh" color="white">
      {/* 🌄 Hero Banner */}
      <Box
        position="relative"
        bgImage="url('/assessment-banner.jpg')"
        bgSize="cover"
        bgPosition="center"
        h={{ base: '240px', md: '320px', lg: '300px' }}
        borderBottomRadius="xl"
        overflow="hidden"
      >
        <MotionBox
          position="absolute"
          top={0}
          left={0}
          w="100%"
          h="100%"
          bg="blackAlpha.700"
          display="flex"
          justifyContent="center"
          alignItems="center"
          px={8}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <VStack spacing={4}>
            <Heading
              fontSize={headingSize}
              textAlign="center"
              bgGradient="linear(to-r, teal.300, blue.500)"
              bgClip="text"
              fontWeight="extrabold"
            >
              Assessment Center
            </Heading>
            <Text fontSize="lg" color="gray.300" textAlign="center">
              Dive into performance dashboards, exams, and analytics.
            </Text>
          </VStack>
        </MotionBox>
      </Box>

      {/* 🎯 Brand Identity */}
      <Brandlogo />

      {/* 📚 Assessment Selection */}
      <AssSelect />

      {/* 📊 Dashboard Section */}
      <Container maxW="6xl" py={10}>
        <Heading as="h2" size="xl" mb={4}>
          Welcome
        </Heading>
        <Text fontSize="lg" mb={6}>
          Explore timed exams, candidate insights, and performance tracking.
        </Text>
      </Container>
    </Box>
  );
};

export default Assessment;