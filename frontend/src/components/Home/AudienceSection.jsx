// src/components/Home/AudienceSection.jsx
import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Grid,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaUniversity,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaSchool,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AudienceSection = () => {
  const bg = useColorModeValue('black', 'gray.900');
  const color = useColorModeValue('white', 'gray.100');
  const boxBg = useColorModeValue('gray.800', 'gray.700');
  const borderHoverColor = useColorModeValue('blue.400', 'cyan.400');
  const colorHoverBg = useColorModeValue('gray.900', 'gray.600');
  const textColor = useColorModeValue('gray.300', 'gray.400');

  const navigate = useNavigate();

  const cardStyle = {
    bg: boxBg,
    p: 4,
    borderRadius: 'lg',
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    border: '2px solid transparent',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    _hover: {
      bg: colorHoverBg,
      borderColor: borderHoverColor,
      transform: 'translateY(-5px)',
      boxShadow: `0 0 12px ${borderHoverColor}`,
    },
  };

  // Navigation handler for different sections
  const handleClick = (section) => {
    switch (section) {
      case 'Youth':
        navigate('/youth');
        break;
      case 'Government':
        navigate('/government');
        break;
      case 'Learn':
        navigate('/learn');
        break;
      case 'Skill Education':
        navigate('/skill');
        break;
      default:
        navigate('/');
        break;
    }
  };

  return (
    <Box py={{ base: 16, md: 24 }} px={{ base: 6, md: 16 }} bg={bg} color={color}>
      <VStack spacing={4} mb={12} textAlign="center">
        <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight="extrabold" color={color}>
          We’re Here to Support Your Learning Journey
        </Heading>
        <Text fontSize="lg" color={textColor}>
          Start exploring what matters to you
        </Text>
      </VStack>

      <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={10} alignItems="start">
        {/* Learners */}
        <Box>
          <Heading size="lg" mb={5} color={borderHoverColor}>
            Learners
          </Heading>
          <Box
            {...cardStyle}
            onClick={() => handleClick('Youth')}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && handleClick('Youth')}
            aria-label="Navigate to Youth learners page"
          >
            <Icon as={FaUserGraduate} boxSize={6} color={borderHoverColor} />
            <Text fontWeight="semibold" fontSize="lg" userSelect="none">
              Youth
            </Text>
          </Box>
        </Box>

        {/* Institutions */}
        <Box gridColumn={{ base: 'span 1', md: 'span 2' }}>
          <Heading size="lg" mb={5} color={borderHoverColor}>
            Institutions
          </Heading>
          <Grid templateColumns={{ base: '1fr', sm: 'repeat(3, 1fr)' }} gap={6}>
            <Box
              {...cardStyle}
              onClick={() => handleClick('Government')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleClick('Government')}
              aria-label="Navigate to Government institutions page"
            >
              <Icon as={FaUniversity} boxSize={6} color={borderHoverColor} />
              <Text fontWeight="semibold" fontSize="lg" userSelect="none">
                Government
              </Text>
            </Box>

            <Box
              {...cardStyle}
              onClick={() => handleClick('Learn')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleClick('Learn')}
              aria-label="Navigate to Learn institutions page"
            >
              <Icon as={FaSchool} boxSize={6} color={borderHoverColor} />
              <Text fontWeight="semibold" fontSize="lg" userSelect="none">
                Learn
              </Text>
            </Box>

            <Box
              {...cardStyle}
              onClick={() => handleClick('Skill Education')}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => e.key === 'Enter' && handleClick('Skill Education')}
              aria-label="Navigate to Skill Education institutions page"
            >
              <Icon as={FaChalkboardTeacher} boxSize={6} color={borderHoverColor} />
              <Text fontWeight="semibold" fontSize="lg" userSelect="none">
                Skill Education
              </Text>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
};

export default AudienceSection;