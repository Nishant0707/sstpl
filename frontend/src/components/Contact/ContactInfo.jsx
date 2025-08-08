import React from "react";
import {
  Box,
  Text,
  VStack,
  Icon,
  useColorModeValue,
  HStack,
  chakra,
} from "@chakra-ui/react";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

const ContactInfo = () => {
  const labelColor = useColorModeValue("blue.600", "cyan.400");
  const infoColor = useColorModeValue("gray.700", "gray.300");
  const iconBg = useColorModeValue("blue.100", "cyan.700");
  const iconColor = useColorModeValue("blue.600", "cyan.300");

  // Custom wrapper for icon with background circle for style
  const IconCircle = ({ icon }) => (
    <chakra.span
      display="inline-flex"
      bg={iconBg}
      color={iconColor}
      p={2}
      borderRadius="full"
      alignItems="center"
      justifyContent="center"
      boxShadow="md"
      mr={3}
      boxSize={8}
      fontSize="lg"
    >
      <Icon as={icon} />
    </chakra.span>
  );

  return (
    <VStack
      align="start"
      spacing={6}
      bg={useColorModeValue("blue.50", "gray.800")}
      p={6}
      borderRadius="xl"
      maxW="320px"
      boxShadow="lg"
    >
      <Box>
        <Text fontWeight="bold" fontSize="lg" color={labelColor} mb={1}>
          Email
        </Text>
        <HStack>
          <IconCircle icon={EmailIcon} />
          <Text fontSize="md" color={infoColor} userSelect="text">
            contact@example.com
          </Text>
        </HStack>
      </Box>

      <Box>
        <Text fontWeight="bold" fontSize="lg" color={labelColor} mb={1}>
          Phone
        </Text>
        <HStack>
          <IconCircle icon={PhoneIcon} />
          <Text fontSize="md" color={infoColor} userSelect="text">
            +91 9876543210
          </Text>
        </HStack>
      </Box>
    </VStack>
  );
};

export default ContactInfo;
