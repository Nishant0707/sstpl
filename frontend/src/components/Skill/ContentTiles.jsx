import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  useColorModeValue,
  Image,
  Fade,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Or use `next/link` if in Next.js

const tiles = [
  {
    title: 'Blogs',
    description: 'Explore ideas, insights, and trends shaping skill development.',
    image: '/assets/blogs.jpg',
    route: '/blogs',
  },
  {
    title: 'Testimonials',
    description: 'Hear from learners, mentors, and industry partners we empower.',
    image: '/assets/testimonials.jpg',
    route: '/testimonials',
  },
];

export default function ContentTiles() {
  const bg = useColorModeValue('gray.900', 'blackAlpha.900');
  const cardBg = useColorModeValue('gray.800', 'gray.700');
  const titleColor = useColorModeValue('blue.300', 'blue.400');
  const textColor = useColorModeValue('whiteAlpha.900', 'whiteAlpha.800');
  const descriptionColor = useColorModeValue('gray.300', 'gray.400');

  return (
    <Box py={20} px={{ base: 6, md: 30 }} bg={bg} minH="100vh">
      <VStack spacing={6} textAlign="center" mb={12} maxW="3xl" mx="auto">
        <Heading
          color="white"
          fontWeight="extrabold"
          fontSize={{ base: '3xl', md: '4xl' }}
          letterSpacing="tight"
        >
          Kick-start Your Journey Here!
        </Heading>
        <Text
          color={descriptionColor}
          fontSize={{ base: 'md', md: 'lg' }}
          fontWeight="medium"
          lineHeight="tall"
        >
          Whether you’re browsing knowledge or impact, we’ve got curated content just for you.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 10, md: 16 }}>
        {tiles.map(({ title, description, image, route }, idx) => (
          <Fade in key={idx} delay={idx * 0.2}>
            <LinkBox
              as="article"
              bg={cardBg}
              borderRadius="xl"
              overflow="hidden"
              shadow="lg"
              _hover={{ transform: 'scale(1.04)', shadow: '2xl' }}
              transition="all 0.4s ease"
              cursor="pointer"
            >
              <Image
                src={image}
                alt={title}
                objectFit="cover"
                w="100%"
                h={{ base: '220px', md: '280px' }}
                loading="lazy"
                transition="transform 0.4s ease"
                _hover={{ transform: 'scale(1.08)' }}
              />
              <Box p={6}>
                <Heading size="md" mb={3} color={titleColor}>
                  <LinkOverlay as={Link} to={route}>
                    {title}
                  </LinkOverlay>
                </Heading>
                <Text fontSize="sm" color={textColor} lineHeight="taller">
                  {description}
                </Text>
              </Box>
            </LinkBox>
          </Fade>
        ))}
      </SimpleGrid>
    </Box>
  );
}