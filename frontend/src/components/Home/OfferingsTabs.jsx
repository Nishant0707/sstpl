// src/components/Home/OfferingsTabs.jsx
import React, { useEffect, useRef } from 'react';
import {
  Box,
  Heading,
  Text,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Grid,
  Image,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { gsap } from 'gsap';

// ✅ Separate offerings for each tab
const platformOfferings = [
  {
    title: 'SSTPL Campus',
    desc: 'Unite and automate academic + business processes',
    image: 'offer/offer3.jpg',
  },
  {
    title: 'SSTPL Exam',
    desc: 'Digitisation and automation of exam processes',
    image: 'offer/offer4.jpg',
  },
  {
    title: 'SSTPL Campus',
    desc: 'Unite and automate academic + business processes',
    image: 'offer/offer3.jpg',
  },
  {
    title: 'SSTPL Exam',
    desc: 'Digitisation and automation of exam processes',
    image: 'offer/offer4.jpg',
  },
];

const learningOfferings = [
  {
    title: 'Skill Development Workshops',
    desc: 'Interactive sessions to build job-ready skills',
    image: 'offer/learn1.jpg',
  },
  {
    title: 'Online Certification Programs',
    desc: 'Flexible learning with recognized credentials',
    image: 'offer/learn2.jpg',
  },
   {
    title: 'Skill Development Workshops',
    desc: 'Interactive sessions to build job-ready skills',
    image: 'offer/learn1.jpg',
  },
  {
    title: 'Online Certification Programs',
    desc: 'Flexible learning with recognized credentials',
    image: 'offer/learn2.jpg',
  },
];

const assessmentOfferings = [
  {
    title: 'SSTPL Assessments',
    desc: 'Conduct fun and interactive assessments using digital tools',
    image: 'offer/offer1.jpg',
  },
  {
    title: 'SSTPL Marking',
    desc: 'Improve efficiency and speed of answer script evaluation',
    image: 'offer/offer2.jpg',
  },
   {
    title: 'SSTPL Assessments',
    desc: 'Conduct fun and interactive assessments using digital tools',
    image: 'offer/offer1.jpg',
  },
  {
    title: 'SSTPL Marking',
    desc: 'Improve efficiency and speed of answer script evaluation',
    image: 'offer/offer2.jpg',
  },
];

const OfferingsTabs = () => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const subTextColor = useColorModeValue('gray.600', 'gray.300');
  const tabPanelRef = useRef(null);

  useEffect(() => {
    if (tabPanelRef.current) {
      gsap.fromTo(
        tabPanelRef.current.children,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  const renderCards = (data) => (
    <Grid
      templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
      gap={6}
      mb={6}
    >
      {data.map((item, idx) => (
        <Box
          key={idx}
          bg={cardBg}
          shadow="md"
          rounded="lg"
          overflow="hidden"
          border="2px solid transparent"
          transition="all 0.3s ease"
          _hover={{
            transform: 'translateY(-6px)',
            borderColor: 'blue.400',
            boxShadow: '0 0 16px rgba(0, 123, 255, 0.6)',
          }}
        >
          <Image
            src={item.image}
            alt={item.title}
            h="160px"
            w="full"
            objectFit="cover"
          />
          <Box p={4}>
            <Text fontWeight="bold" fontSize="md" mb={1}>
              {item.title}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {item.desc}
            </Text>
          </Box>
        </Box>
      ))}
    </Grid>
  );

  return (
    <Box py={16} px={{ base: 4, md: 10 }} bg="white" textAlign="center">
      <Heading mb={2} fontSize={{ base: '2xl', md: '3xl' }}>
        Services We Offer for Institutions
      </Heading>
      <Text mb={6} color={subTextColor}>
        Enhancing institutional impact through smart, skill-focused solutions.
      </Text>

      <Tabs isFitted variant="unstyled">
        <TabList justifyContent="center" borderBottom="2px solid" borderColor="gray.300">
          <Tab
            _selected={{
              borderBottom: '2px solid #3182ce',
              color: 'blue.500',
              fontWeight: 'bold',
            }}
            fontSize="lg"
          >
            Platform Solutions
          </Tab>
          <Tab
            _selected={{
              borderBottom: '2px solid #3182ce',
              color: 'blue.500',
              fontWeight: 'bold',
            }}
            fontSize="lg"
          >
            Learning Programs
          </Tab>
          <Tab
            _selected={{
              borderBottom: '2px solid #3182ce',
              color: 'blue.500',
              fontWeight: 'bold',
            }}
            fontSize="lg"
          >
            Assessment Products
          </Tab>
        </TabList>

        <TabPanels mt={6} ref={tabPanelRef}>
          {/* Platform Solutions */}
          <TabPanel>
            {renderCards(platformOfferings)}
            <Button
              as={RouterLink}
              to="/platform"
              variant="solid"
              size="lg"
              colorScheme="blue"
              borderRadius="full"
              px={8}
              _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
              mb={4}
            >
              Explore More
            </Button>
          </TabPanel>

          {/* Learning Programs */}
          <TabPanel>
            {renderCards(learningOfferings)}
            <Button
              as={RouterLink}
              to="/learn"
              variant="solid"
              size="lg"
              colorScheme="teal"
              borderRadius="full"
              px={8}
              _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
              mb={4}
            >
              Explore More
            </Button>
          </TabPanel>

          {/* Assessment Products */}
          <TabPanel>
            {renderCards(assessmentOfferings)}
            <Button
              as={RouterLink}
              to="/assessments"
              variant="solid"
              size="lg"
              colorScheme="purple"
              borderRadius="full"
              px={8}
              _hover={{ transform: 'scale(1.05)', boxShadow: 'xl' }}
              mb={4}
            >
              Explore More
            </Button>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default OfferingsTabs;