import React from "react";
import {
  Heading,
  Text,
  Container,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

// ✅ Proper motion wrappers
const MotionHeading = motion.create(Heading); // Still supported
const MotionBox = motion.create(Box);  // Using motion.create to avoid deprecation
const MotionText = motion.create(Text);

export default function WhoWeAre() {
  const headingColor = useColorModeValue("gray.800", "gray.100");
  const bodyColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Container maxW="6xl" py={{ base: 10, md: 16 }} px={{ base: 4, md: 8 }}>
      <MotionHeading
        fontSize={{ base: "2xl", md: "3xl" }}
        mb={4}
        color={headingColor}
        textAlign={{ base: "center", md: "left" }}
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        WHO WE ARE
      </MotionHeading>

      <MotionBox
        w="200px"
        h="2px"
        bg="orange.400"
        mb={6}
        mx={{ base: "auto", md: "0" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{ transformOrigin: "left" }}
      />

      <MotionText
        fontSize="md"
        lineHeight="1.75"
        color={bodyColor}
        textAlign={{ base: "justify", md: "left" }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
       Sai Skill Technology Pvt. Ltd. (SSTPL) is a trusted and NCVET  -approved assessment agency dedicated to strengthening India’s skill development mission. Since our inception, we have played a vital role in bridging the gap between skilled individuals and industry needs by conducting high-quality assessments across a wide range of sectors and job roles.
      <br /><br />
      We follow a transparent and standardized evaluation process using a blended approach—combining digital tools, practical testing, and face-to-face assessments. Our strong presence across states, with localized test centers and a network of trained assessors, ensures accessibility and fairness in every evaluation we conduct.SSTPL works in alignment with various Sector Skill Councils (SSCs) under the Skill India Mission, supporting initiatives like PMKVY, NULM, DDU-GKY, and state-run skilling programs.

      </MotionText>
      
    </Container>
  );
}