import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  Button,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { FaChartBar, FaClipboardCheck, FaLaptopCode, FaUserTie } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

// Example type data
const types = [
  {
    icon: FaChartBar,
    title: "Aptitude Assessment",
    desc: "Assess capabilities in various formats, focusing on true talent and ability beyond memorized knowledge.",
    btnText: "Explore",
    to: "/type/aptitude",
  },
  {
    icon: FaUserTie,
    title: "Job Knowledge Test",
    desc: "Evaluate expertise and suitability for job roles with precise, role-specific tests.",
    btnText: "See Details",
    to: "/type/job-knowledge",
  },
  {
    icon: FaClipboardCheck,
    title: "Computer-Based Assessment",
    desc: "Wide-ranging, feedback-driven assessments with robust invigilation and scalable delivery.",
    btnText: "Learn More",
    to: "/type/computer-based",
  },
  {
    icon: FaLaptopCode,
    title: "Coding Assessment",
    desc: "Test coding proficiency with live, real-world challenges supporting multiple programming languages.",
    btnText: "Try Now",
    to: "/type/coding",
  },
];

// Gradient and styling settings
const cardBg = (mode) => (mode === "light" ? "white" : "#191b2b");
const cardShadow = (mode) =>
  mode === "light"
    ? "0 2px 16px #313b7f0f"
    : "0 2px 16px #12153544";
const accentGrad = "linear(to-r, blue.500, purple.500, blue.400)";

export default function SercopType() {
  const mode = useColorModeValue("light", "dark");

  return (
    <Box
      maxW="1200px"
      px={{ base: 5, md: 12 }}
      mx="auto"
      py={{ base: 10, md: 16 }}
      w="100%"
    >
      <VStack mb={10}>
        <Heading
          bgGradient={accentGrad}
          bgClip="text"
          fontWeight="extrabold"
          fontSize={{ base: "2xl", md: "4xl" }}
          letterSpacing="tight"
          textAlign="center"
        >
          Types of Corporate Assessments
        </Heading>
        <Text
          fontSize={{ base: "md", md: "lg" }}
          color={useColorModeValue("gray.500", "gray.400")}
          textAlign="center"
          maxW="700px"
        >
          Designed to deliver swift, insightful, and reliable outcomes for all talent scenarios—explore our custom-tailored assessment types.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
        {types.map((type, idx) => (
          <Box
            key={type.title}
            bg={cardBg(mode)}
            borderRadius="xl"
            boxShadow={cardShadow(mode)}
            transition="box-shadow 0.22s"
            _hover={{ boxShadow: "0 6px 20px #7155af25" }}
            py={7}
            px={5}
            textAlign="center"
            display="flex"
            flexDir="column"
            alignItems="center"
            h="100%"
          >
            <Box
              boxSize="54px"
              borderRadius="full"
              bgGradient={accentGrad}
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={4}
              shadow="md"
            >
              <Icon as={type.icon} w={7} h={7} />
            </Box>
            <Heading
              as="h3"
              fontSize="lg"
              fontWeight="bold"
              letterSpacing="wider"
              bgGradient={accentGrad}
              bgClip="text"
              mb={2}
            >
              {type.title}
            </Heading>
            <Text color="gray.500" fontSize="sm" mb={5} minH="72px">
              {type.desc}
            </Text>
            <Button
              as={RouterLink}
              to={type.to}
              bgGradient={accentGrad}
              color="white"
              fontWeight="bold"
              size="sm"
              borderRadius="full"
              px={7}
              boxShadow="sm"
              mt="auto"
              _hover={{
                bgGradient: "linear(to-r, #5b76dd, #b18dee 90%)",
                boxShadow: "0 2px 20px #8284ea44",
              }}
              fontSize="sm"
              letterSpacing="wider"
            >
              {type.btnText}
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
