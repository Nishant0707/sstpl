import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  useDisclosure,
  useToast,
  Flex,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ContactForm from "../components/Contact/ContactForm";
import ContactInfo from "../components/Contact/ContactInfo";
import RequestCallbackModal from "../components/Contact/RequestCallbackModal";

const MotionBox = motion(Box);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const callbackModal = useDisclosure();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      toast({
        title: res.ok ? data.message : data.error || "Submission failed",
        status: res.ok ? "success" : "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
      if (res.ok) {
        setFormData({ name: "", email: "", phone: "", message: "" });
      }
    } catch (err) {
      toast({
        title: "Server error",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
        variant: "subtle",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCallback = () => {
    toast({
      title: "Callback requested",
      status: "info",
      duration: 3000,
      isClosable: true,
      position: "top-right",
      variant: "subtle",
    });
    callbackModal.onClose();
  };

  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      pt={10}
    >
      <Container maxW="6xl">
        <Heading mb={6}>Contact Us</Heading>
        <Flex direction={{ base: "column", md: "row" }} gap={10}>
          <Box flex={1}>
            <ContactForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              showPhoneBelowEmail={true}
            />
          </Box>
          <Box flex={1}>
            <ContactInfo />
            <Button mt={4} colorScheme="blue" onClick={callbackModal.onOpen}>
              Request Callback
            </Button>
          </Box>
        </Flex>
      </Container>
      <RequestCallbackModal
        isOpen={callbackModal.isOpen}
        onClose={callbackModal.onClose}
        phone={phone}
        setPhone={setPhone}
        handleCallback={handleCallback}
      />
    </MotionBox>
  );
};

export default Contact;