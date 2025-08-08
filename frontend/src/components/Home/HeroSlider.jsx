// src/components/Home/HeroSlider.jsx
import React, { useRef, useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import { Link as RouterLink } from 'react-router-dom';
import { FaPlay, FaPause } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    image: 'hero/hero1.jpg',
    title: 'An NCVET-approved agency, delivers trusted skill assessments workforce.',
    subtitle: 'Skill Development Across India',
  },
  {
    id: 2,
    image: 'hero/hero2.jpg',
    title: 'Assessment is the key to unlocking skills and measuring job readiness.',
    subtitle: 'We help certify skills that shape careers.',
    buttonText: 'Explore Skills',
    buttonLink: '/skill',
  },
  {
    id: 3,
    image: 'hero/hero3.jpg',
    title: 'Empowering India’s Youth Through Reliable Skill Assessments.',
    subtitle: 'Join the movement. Build a skilled future',
    buttonText: 'JOIN NOW',
    buttonLink: '/learn',
  },
  {
    id: 4,
    image: 'hero/hero4.jpg',
    title: 'Standardized Assessments. Certified Skills. Brighter Future.',
    subtitle: ' Partnering in India’s Skill Development Mission',
  },
];

const HeroSlider = () => {
  const sliderRef = useRef(null);
  const [playing, setPlaying] = useState(true);

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const togglePlay = () => {
    playing ? sliderRef.current.slickPause() : sliderRef.current.slickPlay();
    setPlaying(!playing);
  };

  return (
    <Box h="66vh" position="relative" overflow="hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide) => (
          <Box
            key={slide.id}
            h="80vh"
            backgroundImage={`url(${slide.image})`}
            backgroundSize="cover"
            backgroundPosition="center"
            position="relative"
            color="white"
          >
            <VStack
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="center"
              spacing={4}
              zIndex={10}
              px={4}
            >
              <Heading
                fontSize={{ base: '2xl', md: '4xl' }}
                color="white"
                textShadow="0 0 8px rgba(0,0,0,0.6)"
              >
                {slide.title}
              </Heading>
              <Text
                fontSize="lg"
                color="white"
                textShadow="0 0 6px rgba(0,0,0,0.4)"
              >
                {slide.subtitle}
              </Text>

              {slide.buttonText && slide.buttonLink && (
                <Button
                  as={RouterLink}
                  to={slide.buttonLink}
                  size="lg"
                  colorScheme="blue"
                  px={8}
                  _hover={{ transform: 'scale(1.05)' }}
                  transition="all 0.3s"
                >
                  {slide.buttonText}
                </Button>
              )}
            </VStack>

            <HStack
              position="absolute"
              bottom="30px"
              left="50%"
              transform="translateX(-50%)"
              spacing={4}
              zIndex={10}
            >
              <IconButton
                icon={playing ? <FaPause /> : <FaPlay />}
                onClick={togglePlay}
                aria-label="Play/Pause"
                size="lg"
                variant="solid"
                colorScheme="gray"
                bg="whiteAlpha.800"
                color="black"
              />
            </HStack>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSlider;