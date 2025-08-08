import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  useColorModeValue,
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
} from "@chakra-ui/react";

const RequestCallbackModal = ({ isOpen, onClose, phone, setPhone, handleCallback, isLoading }) => {
  const inputBg = useColorModeValue("gray.50", "gray.700");
  const inputBorder = useColorModeValue("gray.300", "gray.600");
  const inputFocusBorder = useColorModeValue("blue.500", "cyan.400");

  const isError = phone && !/^\+?\d{10,14}$/.test(phone.trim());

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInBottom" size="sm">
      <ModalOverlay bg="blackAlpha.600" />
      <ModalContent borderRadius="xl" overflow="hidden" boxShadow="xl" p={4}>
        <ModalHeader fontSize="xl" fontWeight="bold" textAlign="center">
          Request a Callback
        </ModalHeader>

        <ModalBody>
          <VStack as="form" spacing={4} onSubmit={(e) => { e.preventDefault(); !isError && handleCallback(); }}>
            <FormControl isInvalid={isError} isRequired>
              <FormLabel fontWeight="medium" fontSize="md">Phone Number</FormLabel>
              <Input
                type="tel"
                placeholder="+91 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                bg={inputBg}
                borderColor={inputBorder}
                focusBorderColor={inputFocusBorder}
                size="md"
                borderRadius="md"
                autoFocus
                maxLength={14}
              />
              {isError && <FormErrorMessage>Enter a valid 10-14 digit phone number.</FormErrorMessage>}
            </FormControl>
            <Button
              colorScheme="blue"
              width="100%"
              type="submit"
              isLoading={isLoading}
              isDisabled={isError || !phone.trim()}
              size="md"
              borderRadius="lg"
              _hover={{ bg: "blue.600" }}
            >
              Request
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default RequestCallbackModal;
