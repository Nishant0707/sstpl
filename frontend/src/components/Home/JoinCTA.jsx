// src/components/Home/JoinCTA.jsx
import React, { useEffect, useRef } from 'react';
import { Box, Heading, Button, useBreakpointValue } from '@chakra-ui/react';
import { gsap } from 'gsap';
import { Link as RouterLink } from 'react-router-dom';

const JoinCTA = () => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Overlay fade-in from left to right
    gsap.fromTo(
      overlayRef.current,
      { width: '0%' },
      {
        width: '100%',
        duration: 1.5,
        ease: 'power2.out',
      }
    );

    // Text fade-in
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30, filter: 'blur(4px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        delay: 1.1,
        duration: 1,
        ease: 'power3.out',
      }
    );
  }, []);

  const headingSize = useBreakpointValue({ base: '2xl', md: '3xl', lg: '4xl' });

  return (
    <Box
      position="relative"
      bgImage="url('hero/hero4.jpg')"
      bgSize="cover"
      bgPosition="center"
      py={{ base: 24, md: 32 }}
      px={4}
      textAlign="center"
      overflow="hidden"
    >
      {/* Animated black overlay */}
      <Box
        ref={overlayRef}
        position="absolute"
        top="0"
        left="0"
        height="100%"
        bgGradient="linear(to-r, blackAlpha.900, blackAlpha.700, transparent)"
        zIndex={1}
      />

      {/* Content */}
      <Box
        position="relative"
        zIndex={2}
        maxW="3xl"
        mx="auto"
        px={6}
        py={8}
        ref={contentRef}
        color="white"
      >
        <Heading fontSize={headingSize} fontWeight="bold">
          Your Skills, Our Expertise — A Path to Progress!
        </Heading>
       <Button
  as={RouterLink}
  to="/jobs" // ← Update this to your desired route
  mt={8}
  size="lg"
  colorScheme="blue"
  px={10}
  fontSize="lg"
  borderRadius="full"
  _hover={{ transform: 'scale(1.07)', boxShadow: 'xl' }}
  transition="all 0.3s ease"
>
  Join For Free
</Button>

      </Box>
    </Box>
  );
};

export default JoinCTA;
