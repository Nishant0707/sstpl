import React from 'react';
import { Box, Flex, Image, useColorModeValue } from '@chakra-ui/react';

const logos = [
  { src: '/logo/logo6.jpg', alt: 'I' },
  { src: '/logo/logo5.jpg', alt: 'N' },
  { src: '/logo/logo4.jpg', alt: 'E' },
  { src: '/logo/logo1.jpg', alt: 'M' },
  { src: '/logo/logo2.jpg', alt: 'C' },
  { src: '/logo/logo3.jpg', alt: 'I' },
  { src: '/logo.png', alt: 'I' },
  { src: '/logo10.png', alt: 'I' },
];

const Brandlogo = () => {
  const bg = useColorModeValue('blue.50', 'gray.800');

  return (
    <Box py={6} px={4} bg={bg}>
      <Flex wrap="wrap" justify="center" gap={6}>
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo.src}
            alt={logo.alt}
            h={{ base: '40px', md: '80px' }}
            objectFit="contain"
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.76)' }}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default Brandlogo;