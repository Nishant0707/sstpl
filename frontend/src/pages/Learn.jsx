import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Image,
  SimpleGrid,
  useColorModeValue,
  Badge,
  Stack,
  chakra,
  IconButton,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const courses = [
  {
    id: 1,
    title: "Handicrafts and Carpet Sector Skill Council (HCSSC)",
    segment: "Job Roles",
    provider: "Traditional Hand Embroiderer",
    description:
      "HCSSC is a recognized awarding body under NCVET promoted by EPCH, CEPC, and NSDC for skilling and certification under Ministry of Textiles.",
    image: "/learn/banner1.jpg",
  },
  {
    id: 2,
    title: "Media & Entertainment Skills Council (MESC)",
    segment: "Job Roles",
    provider: "Search Engine Optimization Executive",
    description:
      "Founded in 2012, MESC is a not-for-profit awarding body promoted by FICCI and financially supported by NSDC with NCVET recognition.",
    image: "/learn/banner1.jpg",
  },
  {
    id: 3,
    title: "Water Management & Plumbing Skill Council",
    segment: "Job Roles",
    provider: "Plumbing General",
    description:
      "WMPSC is the premier SSC for water and plumbing industries under NCVET & NSDC, supported by MoSDE Government of India.",
    image: "/learn/banner1.jpg",
  },
  {
    id: 4,
    title: "Skill Council for Persons with Disability (SCPwD)",
    segment: "Job Roles",
    provider: "Retail Sale Associate",
    description:
      "SCPwD aims to skill persons with disabilities through industry-relevant vocational training, promoted by CII and MSDE.",
    image: "/learn/banner1.jpg",
  },
  {
    id: 5,
    title: "Automotive Skills Development Council (ASDC)",
    segment: "Job Roles",
    provider: "Electric Vehicle Service Technician",
    description:
      "ASDC is the SSC for automotive sector focusing on skill development under Skill India Mission with industry support.",
    image: "/learn/banner1.jpg",
  },
  {
    id: 6,
    title: "Healthcare Sector Skill Council (HSSC)",
    segment: "Job Roles",
    provider: "General Duty Assistant",
    description:
      "HSSC works under NSDC & MSDE to bridge skill gaps in healthcare industry through standards and training programs.",
    image: "/learn/banner2.jpg",
  },
  {
    id: 7,
    title: "Safety Skill Development Foundation (SSDF)",
    segment: "Job Roles",
    provider: "Fire Safety Officer",
    description:
      "SSDF builds a safety professional ecosystem through national standards, trainings and NCVET certifications.",
    image: "/learn/banner3.jpg",
  },
];

const CarouselCard = ({ course }) => {
  const bg = useColorModeValue("white", "gray.800");
  const shadow = useColorModeValue("md", "dark-lg");
  const accent = useColorModeValue("blue.500", "cyan.400");

  return (
    <Box
      minW={{ base: "280px", md: "320px" }}
      borderRadius="xl"
      bg={bg}
      boxShadow={shadow}
      overflow="hidden"
      cursor="pointer"
      transition="transform 0.3s ease, box-shadow 0.3s ease"
      _hover={{
        transform: "scale(1.07)",
        boxShadow: "2xl",
      }}
    >
      <Image
        src={course.image}
        alt={course.title}
        objectFit="cover"
        height="200px"
        width="100%"
        loading="lazy"
      />
      <Box p={5}>
        <Heading size="md" color={accent} mb={1}>
          {course.title}
        </Heading>
        <Badge mb={3} colorScheme="blue" variant="subtle" fontSize="sm">
          {course.segment}
        </Badge>
        <Text fontSize="sm" noOfLines={2} color="gray.500">
          {course.provider}
        </Text>
      </Box>
    </Box>
  );
};

const FeaturedCourse = ({ course, reverse }) => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const descriptionColor = useColorModeValue("gray.700", "gray.300");
  const headingColor = useColorModeValue("blue.600", "cyan.400");

  return (
    <Stack
      direction={{ base: "column", md: reverse ? "row-reverse" : "row" }}
      spacing={{ base: 4, md: 12 }}
      align="center"
      py={14}
      px={4}
      bg={bg}
      borderRadius="3xl"
      boxShadow="xl"
    >
      <Image
        src={course.image}
        alt={course.title}
        flex="1"
        borderRadius="2xl"
        boxShadow="2xl"
        objectFit="cover"
        maxH={{ base: "220px", md: "330px" }}
        loading="lazy"
      />
      <Box flex="1" maxW={{ base: "100%", md: "60%" }}>
        <Heading mb={4} fontSize={{ base: "2xl", md: "3xl" }} color={headingColor}>
          {course.title}
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} color={descriptionColor} lineHeight="tall">
          {course.description}
        </Text>
        <Button
          mt={6}
          colorScheme="blue"
          variant="outline"
          size="md"
          borderRadius="full"
          _hover={{ bg: "blue.600", color: "white" }}
        >
          Learn More
        </Button>
      </Box>
    </Stack>
  );
};

const StaggeredGridCard = ({ course, reverse }) => {
  const bg = useColorModeValue("white", "gray.800");
  const accent = useColorModeValue("blue.600", "cyan.400");
  const descColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Stack
      direction={{ base: "column", md: reverse ? "row-reverse" : "row" }}
      bg={bg}
      borderRadius="2xl"
      shadow="md"
      overflow="hidden"
      mb={10}
      spacing={0}
      maxW="840px"
      mx="auto"
    >
      <Image
        src={course.image}
        alt={course.title}
        objectFit="cover"
        w={{ base: "100%", md: "45%" }}
        h={{ base: "240px", md: "100%" }}
      />
      <Box p={6} flex="1" display="flex" flexDirection="column" justifyContent="center">
        <Heading color={accent} mb={3} fontSize="2xl" letterSpacing="wider">
          {course.title}
        </Heading>
        <Text fontSize="md" color={descColor} flexGrow={1} noOfLines={4}>
          {course.description}
        </Text>
        <Button mt={5} alignSelf="flex-start" colorScheme="blue" variant="ghost" fontWeight="bold">
          Explore Course
        </Button>
      </Box>
    </Stack>
  );
};

const CoursesSection = () => {
  const [carouselIndex, setCarouselIndex] = React.useState(0);
  const total = courses.length;

  const scrollRef = React.useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  // Featured course is 2nd index (arbitrary)
  const featuredIndex = 1;

  // The rest excluding featured for staggered grid below
  const staggeredCourses = courses.filter((_, i) => i !== featuredIndex);

  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} py={{ base: 14, md: 24 }}>
      <VStack mb={10} textAlign="center" maxW="6xl" mx="auto" px={4} spacing={3}>
        <Heading
          fontSize={{ base: "3xl", md: "5xl" }}
          bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
          bgClip="text"
          fontWeight="extrabold"
          letterSpacing="wide"
        >
          Explore Our Training Programs
        </Heading>
        <Text maxW="3xl" color={useColorModeValue("gray.600", "gray.300")} fontSize="xl" fontWeight="medium">
          From diverse sectors to specialized job roles, browse and dive into courses designed to boost your career.
        </Text>
      </VStack>

      {/* Carousel Section */}
      <Box position="relative" maxW="7xl" mx="auto" px={4} mb={16}>
        <Flex align="center" justify="space-between" mb={4}>
          <Heading size="lg" color={useColorModeValue("blue.600", "cyan.400")}>
            Courses Carousel
          </Heading>
          <HStack spacing={3}>
            <IconButton
              icon={<ChevronLeftIcon />}
              aria-label="Scroll left"
              onClick={scrollLeft}
              variant="ghost"
              size="lg"
              color={useColorModeValue("blue.500", "cyan.400")}
              _hover={{ bg: "blue.50" }}
            />
            <IconButton
              icon={<ChevronRightIcon />}
              aria-label="Scroll right"
              onClick={scrollRight}
              variant="ghost"
              size="lg"
              color={useColorModeValue("blue.500", "cyan.400")}
              _hover={{ bg: "blue.50" }}
            />
          </HStack>
        </Flex>

        <Box
          ref={scrollRef}
          overflowX="auto"
          whiteSpace="nowrap"
          css={{
            "&::-webkit-scrollbar": {
              height: "6px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: useColorModeValue("blue.400", "cyan.600"),
              borderRadius: "8px",
            },
          }}
        >
          <HStack spacing={6} display="inline-flex">
            {courses.map((course) => (
              <Box key={course.id} as="span" display="inline-block">
                <CarouselCard course={course} />
              </Box>
            ))}
          </HStack>
        </Box>
      </Box>

      {/* Featured Course */}
      <FeaturedCourse course={courses[featuredIndex]} reverse={false} />

      {/* Staggered Grid */}
      <VStack mt={20} spacing={12} maxW="7xl" mx="auto" px={4}>
        {staggeredCourses.map((course, idx) => (
          <StaggeredGridCard key={course.id} course={course} reverse={Boolean(idx % 2)} />
        ))}
      </VStack>
    </Box>
  );
};

export default CoursesSection;
