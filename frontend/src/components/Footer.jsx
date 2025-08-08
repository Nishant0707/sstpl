import React from "react";
import {
  Box,
  Grid,
  Heading,
  Link,
  Text,
  Stack,
  HStack,
  Icon,
  Divider,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionLink = motion(Link);

const FooterItem = ({ children, to, href, isExternal = false, ...props }) => {
  const location = useLocation();
  const isActive = to && location.pathname === to;

  return (
    <MotionLink
      as={to ? RouterLink : "a"}
      to={to}
      href={href}
      isExternal={isExternal}
      fontSize="sm"
      fontWeight="medium"
      color={isActive ? "teal.300" : "gray.400"}
      borderBottom={isActive ? "2px solid teal" : "none"}
      whileHover={{ scale: 1.05, color: "teal.400" }}
      transition={{ duration: 0.2 }}
      _hover={{ textDecoration: "none" }}
      width="fit-content"
      {...props}
    >
      {children}
    </MotionLink>
  );
};

const Footer = () => {
  const bg = useColorModeValue("#0e1621", "#0e1621");
  const headingColor = "teal.300";
  const textColor = "gray.400";

  return (
    <Box bg={bg} color={textColor} width="100%">
      <MotionBox
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        px={{ base: 6, sm: 12, md: 24 }}
        py={{ base: 6, md: 8 }}
        borderTop="4px solid"
        borderColor="teal.400"
        maxW="1280px"
        mx="auto"
        roundedTop="3xl"
        boxShadow="0 0 12px -5px teal"
      >
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          gap={8}
          pb={6}
        >
          {/* Branding Section */}
          <Box>
            <Box mb={5}>
              <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
                <Box boxSize={{ base: "130px", md: "100px" }}>
                  <img
                    src="/logo.png"
                    alt="Company Logo"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Box>
              </Link>
            </Box>
            <Text fontSize="sm" color="gray.500" maxW="280px" lineHeight="short">
              Empowering innovation in education, skill development, and youth
              transformation with scalable, tech-driven solutions.
            </Text>
          </Box>

          {/* Services + Quick Links */}
          <Box>
            <Heading size="sm" mb={3} color={headingColor}>Services</Heading>
            <Stack spacing={2} mb={4}>
              <FooterItem to="/government">Government Scheme</FooterItem>
              <FooterItem to="/skill-education">Skill Education</FooterItem>
              <FooterItem to="/youth">Youth</FooterItem>
              <FooterItem to="/ser-cop">Corporate Assessment</FooterItem>
              <FooterItem to="/ser-edu">Education Assessment</FooterItem>
              <FooterItem to="/jobdes">Job Profile</FooterItem>
            </Stack>

            <Heading size="sm" mb={3} color={headingColor}>Quick Links</Heading>
            <Stack spacing={2}>
              <FooterItem to="/testimonials">Testimonials</FooterItem>
              <FooterItem to="/blogs">Blogs</FooterItem>
              <FooterItem to="/help-videos">Help Videos</FooterItem>
            </Stack>
          </Box>

          {/* Company + Policies */}
          <Box>
            <Heading size="sm" mb={3} color={headingColor}>Company</Heading>
            <Stack spacing={2} mb={4}>
              <FooterItem to="/about">About Us</FooterItem>
              <FooterItem to="/contact">Contact Us</FooterItem>
              <FooterItem to="/jobs">Jobs</FooterItem>
              <FooterItem to="/learn">Learn</FooterItem>
            </Stack>

            <Heading size="sm" mb={3} color={headingColor}>Policies</Heading>
            <Stack spacing={2}>
              <FooterItem href="/terms-of-use">Terms of Use</FooterItem>
              <FooterItem href="#">Privacy Notice</FooterItem>
              <FooterItem href="#">Cookie Policy</FooterItem>
            </Stack>
          </Box>
        </Grid>

        <Divider borderColor="gray.700" opacity={0.3} my={4} />

        {/* Contact & Social */}
       <VStack spacing={6} align="center" py={6}>
  <HStack spacing={8}>
    <Icon as={FaPhoneAlt} boxSize={6} color="teal.500" />
    <Text fontSize="md" fontWeight="semibold">+91-9555552356</Text>
    <Text fontSize="md" fontWeight="semibold">011 4036 4356</Text>
  </HStack>

  <Text
    fontSize="md"
    fontWeight="semibold"
    textAlign="center"
    maxW="350px"
    lineHeight="short"
  >
    Office No-44, 4th Floor, Deepak Building, Nehru Place, New Delhi, Delhi 110019
  </Text>

  <HStack spacing={6}>
    <FooterItem href="#" isExternal aria-label="Facebook">
      <Icon as={FaFacebook} boxSize={6} color="#1877F2" />
    </FooterItem>
    <FooterItem href="#" isExternal aria-label="Twitter">
      <Icon as={FaTwitter} boxSize={6} color="white" />
    </FooterItem>
    <FooterItem
      href="https://www.linkedin.com/in/sstpltech/?originalSubdomain=in"
      isExternal
      aria-label="Linkedin"
    >
      <Icon as={FaLinkedin} boxSize={6} color="#0077B5" />
    </FooterItem>
    <FooterItem
      href="https://www.instagram.com/sstpltech"
      isExternal
      aria-label="Instagram"
    >
      <Icon as={FaInstagram} boxSize={6} color="#E1306C" />
    </FooterItem>
    <FooterItem href="#" isExternal aria-label="YouTube">
      <Icon as={FaYoutube} boxSize={6} color="#FF0000" />
    </FooterItem>
  </HStack>
</VStack>


        <Text textAlign="center" fontSize="sm" color="gray.500" mt={4}>
          Built with <span role="img" aria-label="love">💙</span> by SSTPL • © {new Date().getFullYear()} All rights reserved.
        </Text>
      </MotionBox>
    </Box>
  );
};

export default Footer;