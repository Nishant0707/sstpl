import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  Button,
  Wrap,
  WrapItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box); // for future animation integration

const AssSelect = () => {
  const headingSize = useBreakpointValue({ base: '3xl', md: '4xl', lg: '5xl' });
  const [selectedType, setSelectedType] = useState('');

 const assessments = [
  'Government Job Preparation',
  'Banking & Financial Services',
  'IT & Digital Skills',
  'Electronics & Hardware',
  'Healthcare & Allied Services',
  'Construction & Infrastructure',
  'Automotive Technology',
  'Retail & Customer Service',
  'Agriculture & Food Processing',
  'Tourism & Hospitality',
  'Media & Entertainment',
  'Beauty & Wellness',
  'Logistics & Supply Chain',
  'Telecom & Networking',
  'Custom Skill Assessment',
];

  return (
    <Box bg="gray.900" minH="100vh" color="white" py={10} px={6}>
      {/* 🔍 Title Section */}
      <Heading size={headingSize} mb={10} textAlign="center" color="teal.300">
        Choose Assessment Type
      </Heading>
      <VStack spacing={6}>
        <Text fontSize="lg" textAlign="center" color="gray.300">
          Tap a category to learn more about each assessment.
        </Text>

        {/* 🔘 Button Group */}
        <Wrap justify="center" spacing={4} maxW="800px">
  {assessments.map((type) => (
    <WrapItem key={type}>
      <Button
        onClick={() => setSelectedType(type)}
        variant="solid"
        borderWidth={2}
        borderColor={selectedType === type ? 'blue.500' : 'gray.600'}
        boxShadow={selectedType === type ? '0 0 0 3px rgba(66, 153, 225, 0.6)' : 'none'}
        color={selectedType === type ? 'white' : 'gray.100'}
        bg={selectedType === type ? 'blue.600' : 'gray.800'}
        _hover={{
          bg: selectedType === type ? 'blue.700' : 'gray.700',
          borderColor: selectedType === type ? 'blue.400' : 'gray.500',
        }}
        _active={{ bg: 'blue.800' }}
        transition="all 0.2s ease-in-out"
        px={6}
        py={4}
        rounded="lg"
        fontWeight="semibold"
        fontSize="md"
      >
        {type}
      </Button>
    </WrapItem>
  ))}
</Wrap>
      </VStack>

      {/* 📊 Footer Preview */}
      <Container maxW="6xl" py={10}>
        <Heading as="h2" size="xl" mb={4} color="teal.300">
          Ready to Begin
        </Heading>
        <Text fontSize="lg" mb={6} color="gray.300">
          Selected Track: <strong>{selectedType || 'None'}</strong>
        </Text>
      </Container>
    </Box>
  );
};

export default AssSelect;