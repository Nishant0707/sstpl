// src/components/Home/ExploreContent.jsx
import React, { useEffect, useRef } from 'react';
import {
  Box,
  Heading,
  Text,
  Grid,
  Image,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ExploreContent = () => {
  const cardsRef = useRef([]);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Animate each content card
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
          },
        }
      );
    });

    // Animate the button CTA
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 95%',
          },
        }
      );
    }
  }, []);

  const exploreCards = [
    {
      image: 'offer/offer1.jpg',
      title: 'Blogs',
      desc: 'Keep up with the trending topics about your industry',
    },
    {
      image: 'offer/offer2.jpg',
      title: 'Testimonials',
      desc: "Read about the impact we've made on our customers",
    },
    {
      image: 'offer/offer3.jpg',
      title: 'Case Studies',
      desc: 'Deep dives into how SSTPL creates success stories',
    },
  ];

  return (
    <Box
      bg="black"
      color="white"
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 12 }}
      textAlign="center"
    >
      <Heading fontSize={{ base: '2xl', md: '3xl' }} mb={2}>
        Explore the world of SSTPL
      </Heading>
      <Text color="gray.400" mb={10}>
        Read our blogs, case studies and stay updated with the latest insights
      </Text>

      <Grid
        templateColumns={{
          base: '1fr',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        gap={6}
        justifyContent="center"
        mb={8}
      >
        {exploreCards.map((card, index) => (
          <Box
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            bg="gray.800"
            borderRadius="md"
            overflow="hidden"
            _hover={{ transform: 'scale(1.03)', shadow: 'xl' }}
            transition="0.3s"
            textAlign="left"
          >
            <Image
              src={card.image}
              alt={card.title}
              h="180px"
              w="full"
              objectFit="cover"
            />
            <Box p={5}>
              <Text fontWeight="bold" fontSize="lg" mb={1}>
                {card.title}
              </Text>
              <Text fontSize="sm" color="gray.300">
                {card.desc}
              </Text>
            </Box>
          </Box>
        ))}
      </Grid>

      {/* CTA Button */}
      <Button
        ref={ctaRef}
        variant="solid"
        colorScheme="blue"
        size="lg"
        borderRadius="full"
        px={8}
        _hover={{
          transform: 'scale(1.05)',
          boxShadow: 'md',
          bg: 'blue.600',
        }}
        transition="all 0.3s"
      >
        Explore More Resources
      </Button>
    </Box>
  );
};

export default ExploreContent;