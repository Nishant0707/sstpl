import React from "react";
import {
  Box,
  Flex,
  HStack,
  VStack,
  Link,
  Text,
  IconButton,
  Button,
  useDisclosure,
  Image,
  Collapse,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const location = useLocation();
  const { isOpen, onToggle } = useDisclosure();

  const navLinkStyle = (to) => ({
    as: RouterLink,
    to,
    fontSize: "md",
    fontWeight: "medium",
    color: "black",
    borderBottom: location.pathname === to ? "2px solid #3182ce" : "none",
    _hover: {
      borderBottom: "2px solid #3182ce",
      textDecoration: "none",
    },
    transition: "border-bottom 0.2s ease",
    whiteSpace: "nowrap",
  });

  return (
    <>
      {/* Top Bar */}
      <Box
        bg="rgba(255, 255, 255, 0.85)"
        backdropFilter="blur(8px)"
        borderBottom="1px solid #e2e8f0"
        w="100%"
        overflow="hidden"
      >
        <Container maxW="1280px" px={{ base: 4, md: 8 }} py={2}>
          <Flex justify="space-between" align="center" wrap="wrap">
            <Text fontSize="l" color="gray.700" fontWeight="500">
              📞 011 4036 4356 | ⏰ Mon–Sat 09:30am–05:30pm
            </Text>
            <Box overflow="hidden" whiteSpace="nowrap" w="100%" maxW="800px">
              <Box
                as="span"
                display="inline-block"
                minW="100%"
                animation="scrollText 18s linear infinite"
                fontSize="xl"
                fontWeight="500"
                color="red.600"
              >
                ⚠️ Payment must be credited to Company Account 054302000051770 ·
                IFSC: IOBA0000543
              </Box>
            </Box>
          </Flex>
        </Container>

        <style>
          {`
            @keyframes scrollText {
              0% { transform: translateX(100%); }
              100% { transform: translateX(-100%); }
            }
          `}
        </style>
      </Box>

      {/* Main Navbar */}
      <Box
        bg="rgba(255, 255, 255, 0.85)"
        backdropFilter="blur(8px)"
        position="sticky"
        top="0"
        w="100%"
        zIndex="1000"
        px={{ base: 3, md: 8 }}
        py={0}
        boxShadow="md"
      >
        <Container maxW="1280px" px={{ base: 4, md: 8 }} py={2}>
          <Flex align="center" justify="space-between" wrap="wrap" w="full">
            {/* Logo */}
            <RouterLink to="/">
              <HStack spacing={2}>
                <Image src="/logo.png" alt="Logo" boxSize="40px" />
                <Text
                  fontSize={{ base: "md", sm: "lg", md: "xl" }}
                  fontWeight="bold"
                  textTransform="uppercase"
                  bgGradient="linear(to-l, rgb(31,194,216), rgb(18,49,223))"
                  bgClip="text"
                  maxW={{ base: "160px", sm: "300px", md: "none" }}
                  wordBreak="break-word"
                >
                  Sai Skill Technology Pvt. Ltd
                </Text>
              </HStack>
            </RouterLink>

            {/* Mobile Menu Toggle */}
            <IconButton
              display={{ base: "flex", md: "none" }}
              onClick={onToggle}
              icon={isOpen ? <IoClose /> : <IoMenu />}
              aria-label="Toggle Navigation"
              variant="ghost"
              fontSize="24px"
            />

            {/* Desktop Menu */}
            <Flex
              display={{ base: "none", md: "flex" }}
              align="center"
              justify="flex-end"
              gap={4}
              flex="1"
              wrap="wrap"
            >
              <Link {...navLinkStyle("/")}>Home</Link>
              <Link {...navLinkStyle("/about")}>About</Link>
              <Link {...navLinkStyle("/assess")}>Assessment</Link>

              {/* Desktop Services Dropdown */}
              <Menu isLazy>
                <MenuButton
                  as={Text}
                  fontSize="md"
                  fontWeight="medium"
                  color="black"
                  cursor="pointer"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  _hover={{ borderBottom: "2px solid #3182ce" }}
                >
                  Services <ChevronDownIcon />
                </MenuButton>

                <MenuList
                  minW="400px"
                  py={4}
                  px={6}
                  display="grid"
                  gridTemplateColumns="repeat(3, 1fr)"
                  columnGap={8}
                  rowGap={4}
                  bg="white"
                  boxShadow="md"
                >
                  {/* Skill Development Initiatives */}
                  <Box>
                    <Text
  fontWeight="bold"
  mb={2}
  fontSize="md"
  bgGradient="linear(to-r, blue.500, purple.600)"
  bgClip="text"
>
  Skill Development Initiatives
</Text>

                    <MenuItem
                      as={RouterLink}
                      to="/government"
                      px={0}
                      mb={1}
                      _hover={{ bg: "gray.100" }}
                    >
                      Government Scheme
                    </MenuItem>
                    <MenuItem
                      as={RouterLink}
                      to="/skill"
                      px={0}
                      mb={1}
                      _hover={{ bg: "gray.100" }}
                    >
                      Skill Education
                    </MenuItem>
                    <MenuItem
                      as={RouterLink}
                      to="/youth"
                      px={0}
                      _hover={{ bg: "gray.100" }}
                    >
                      Youth
                    </MenuItem>
                  </Box>

                  {/* Corporate */}
                  <Box>
                    <Text
  fontWeight="bold"
  mb={2}
  fontSize="md"
  bgGradient="linear(to-r, blue.500, purple.600)"
  bgClip="text"
>
  Corporate
</Text>
                    <MenuItem
                      as={RouterLink}
                      to="/ser-cop"
                      px={0}
                      _hover={{ bg: "gray.100" }}
                    >
                      Corporate Assessment
                    </MenuItem>
                    <MenuItem
                      as={RouterLink}
                      to="/ser-edu"
                      px={0}
                      _hover={{ bg: "gray.100" }}
                    >
                     Education Assessment
                    </MenuItem>

                    <MenuItem
                      as={RouterLink}
                      to="/ser-gov"
                      px={0}
                      _hover={{ bg: "gray.100" }}
                    >
                    Government Assessment
                    </MenuItem>

                  </Box>

                  {/* Student */}
                  <Box>
                                   <Text
  fontWeight="bold"
  mb={2}
  fontSize="md"
  bgGradient="linear(to-r, blue.500, purple.600)"
  bgClip="text"
>
 Student
</Text>
                    <MenuItem
                      as={RouterLink}
                      to="/jobdes"
                      px={0}
                      _hover={{ bg: "gray.100" }}
                    >
                      Job Profile
                    </MenuItem>
                  </Box>
                </MenuList>
              </Menu>

              <Link {...navLinkStyle("/learn")}>Learn</Link>
              <Link {...navLinkStyle("/jobs")}>Jobs</Link>
              <Link {...navLinkStyle("/contact")}>Contact</Link>

              {/* Quick Links Dropdown */}
              <Menu isLazy>
                <MenuButton
                  as={Text}
                  fontSize="md"
                  fontWeight="medium"
                  color="black"
                  cursor="pointer"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  _hover={{ borderBottom: "2px solid #3182ce" }}
                >
                  Quick Links <ChevronDownIcon />
                </MenuButton>
                <MenuList minW="200px">
                  <MenuItem as={RouterLink} to="/testimonials">
                    Testimonials
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/blogs">Blogs</MenuItem>
                  <MenuItem as={RouterLink} to="/help-videos">
                    Help Videos
                  </MenuItem>
                </MenuList>
              </Menu>

              {/* Login Dropdown */}
              <Menu isLazy>
                <MenuButton
                  as={Text}
                  fontSize="md"
                  fontWeight="medium"
                  color="black"
                  cursor="pointer"
                  display="flex"
                  alignItems="center"
                  gap={1}
                  _hover={{ borderBottom: "2px solid #3182ce" }}
                >
                  Login <ChevronDownIcon />
                </MenuButton>
                <MenuList minW="180px">
                  <MenuItem
                    as="a"
                    href="https://sstplexam.com/Identity/Account/Login?ReturnUrl=%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to Login
                  </MenuItem>
                  <MenuItem as={RouterLink} to="/signup">Admin</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>

          {/* Mobile Collapse */}
          <Collapse in={isOpen} animateOpacity>
            <Box
              px={7}
              pb={4}
              mt={2}
              display={{ md: "none" }}
              maxHeight="calc(100vh - 80px)" // Adjust depending on top bars height
              overflowY="auto"
              css={{
                // Optional: for smooth scrolling on some browsers
                WebkitOverflowScrolling: "touch",
              }}
            >
              <VStack spacing={4} align="start" w="full">

                {/* Top-level links in mobile */}
                <Link {...navLinkStyle("/")}>Home</Link>
                <Link {...navLinkStyle("/about")}>About</Link>
                <Link {...navLinkStyle("/assess")}>Assessment</Link>

                <Accordion allowToggle w="full" border="none" boxShadow="none">

                  {/* Services Accordion Panel */}
                  <AccordionItem border="none" w="full">
                    <AccordionButton px={0} fontWeight="bold" fontSize="lg" w="full">
                      <Box flex="1" textAlign="left">
                        Services
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4} px={0}>
                      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gap={2}>
                        <Link {...navLinkStyle("/government")}>Government Scheme</Link>
                        <Link {...navLinkStyle("/skill")}>Skill Education</Link>
                        <Link {...navLinkStyle("/youth")}>Youth</Link>
                        <Link {...navLinkStyle("/hire")}>Hiring Solution</Link>
                        <Link {...navLinkStyle("/jobdes")}>Job Profile</Link>
                      </Box>
                    </AccordionPanel>
                  </AccordionItem>

                  {/* Quick Links Accordion Panel */}
                  <AccordionItem border="none" w="full" mt={4}>
                    <AccordionButton px={0} fontWeight="bold" fontSize="lg" w="full">
                      <Box flex="1" textAlign="left">
                        Quick Links
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4} px={0}>
                      <VStack align="start" spacing={2}>
                        <Link {...navLinkStyle("/testimonials")}>Testimonials</Link>
                        <Link {...navLinkStyle("/blogs")}>Blogs</Link>
                        <Link {...navLinkStyle("/sstpl-pan-india")}>SSTPL</Link>
                        <Link {...navLinkStyle("/help-videos")}>Help Videos</Link>
                      </VStack>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>

                {/* Other top-level links */}
                <Link {...navLinkStyle("/learn")}>Learn</Link>
                <Link {...navLinkStyle("/jobs")}>Jobs</Link>
                <Link {...navLinkStyle("/contact")}>Contact</Link>

                {/* Login Button */}
                <Button
                  as="a"
                  href="https://sstplexam.com/Identity/Account/Login?ReturnUrl=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                  colorScheme="blue"
                  w="full"
                >
                  Login / SignUp
                </Button>
              </VStack>
            </Box>
          </Collapse>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
