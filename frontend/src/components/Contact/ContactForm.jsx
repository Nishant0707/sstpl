import React from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

const ContactForm = ({ formData, handleChange, handleSubmit, isSubmitting }) => {
  const inputBg = useColorModeValue("white", "gray.700");
  const inputBorder = useColorModeValue("gray.300", "gray.600");
  const inputFocusBorder = useColorModeValue("cyan.400", "cyan.300");

  return (
    <Box
      as="form"
      onSubmit={handleSubmit}
      w="100%"
      maxW="480px"
      mx="auto"
      p={6}
      bg={useColorModeValue("gray.50", "gray.900")}
      borderRadius="2xl"
      boxShadow="xl"
    >
      <VStack spacing={5}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            bg={inputBg}
            borderColor={inputBorder}
            _focus={{ borderColor: inputFocusBorder, boxShadow: `0 0 0 2px ${inputFocusBorder}` }}
            borderRadius="md"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            bg={inputBg}
            borderColor={inputBorder}
            _focus={{ borderColor: inputFocusBorder, boxShadow: `0 0 0 2px ${inputFocusBorder}` }}
            borderRadius="md"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Phone</FormLabel>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            bg={inputBg}
            borderColor={inputBorder}
            _focus={{ borderColor: inputFocusBorder, boxShadow: `0 0 0 2px ${inputFocusBorder}` }}
            borderRadius="md"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here"
            bg={inputBg}
            borderColor={inputBorder}
            _focus={{ borderColor: inputFocusBorder, boxShadow: `0 0 0 2px ${inputFocusBorder}` }}
            borderRadius="md"
            minH="120px"
          />
        </FormControl>

        <MotionButton
          colorScheme="cyan"
          type="submit"
          width="full"
          isLoading={isSubmitting}
          whileHover={{ scale: 1.03, boxShadow: "0 0 10px rgba(0, 255, 255, 0.6)" }}
          fontWeight="bold"
          size="lg"
          borderRadius="xl"
        >
          Submit
        </MotionButton>
      </VStack>
    </Box>
  );
};

export default ContactForm;
