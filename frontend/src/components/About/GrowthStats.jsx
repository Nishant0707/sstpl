import React from "react";
import { Box, Heading, Text, SimpleGrid, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionVStack = motion(VStack);

const stats = [
  { label: "No of sectors we are with", value: "19", icon: "🎓" },
  { label: "No of assessment Done", value: "10.5k+", icon: "📄" },
  { label: "No of assessor we have", value: "1000+", icon: "👥" },
  { label: "Enrolled Candidate", value: "1.5Lakh+", icon: "📊" },
  { label: "Cloud learners", value: "17 Mn", icon: "☁️" },
];

export default function GrowthStats({ cardBg }) {
  return (
    <Box py={16}>
      <Box textAlign="center" mb={10}>
        <Heading>We are Growing</Heading>
        <Text>Our numbers speak for themselves!</Text>
      </Box>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={6} px={6} mb={16}>
        {stats.map((stat, i) => (
          <MotionVStack
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            bg={cardBg}
            p={6}
            borderRadius="xl"
            boxShadow="lg"
            textAlign="center"
          >
            <Box fontSize="3xl">{stat.icon}</Box>
            <Heading fontSize="xl" color="blue.500">{stat.value}</Heading>
            <Text fontSize="sm">{stat.label}</Text>
          </MotionVStack>
        ))}
      </SimpleGrid>
    </Box>
  );
}