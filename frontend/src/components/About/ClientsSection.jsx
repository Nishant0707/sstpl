import React from "react";
import {
  Box,
  Heading,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  SimpleGrid,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const logos = [
  "/logo/logo1.jpg",
  "/logo/logo2.jpg",
  "/logo/logo3.jpg",
  "/logo/logo4.jpg",
  "/logo/logo5.jpg",
  "/logo/logo6.jpg",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ClientsSection() {
  return (
    <Box py={{ base: 12, md: 20 }} px={{ base: 4, md: 12 }}>
      <Box textAlign="center" mb={16}>
        <Heading fontSize="3xl" mb={4}>
          Our Partners
        </Heading>
        <Box w="200px" h="2px" bg="orange.400" mx="auto" my={2} />
        <Text fontSize="md" color={useColorModeValue("gray.600", "gray.300")}>
          Organizations We Work With to Build Skills Nationwide
        </Text>
      </Box>

      <Tabs variant="soft-rounded" colorScheme="orange" isFitted>
        <TabList>
          <Tab fontWeight="semibold">Our Partners</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={10}>
              {logos.map((logo, i) => (
                <MotionBox
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  variants={fadeInUp}
                  bg={useColorModeValue("white", "gray.800")}
                  borderRadius="xl"
                  boxShadow="md"
                  p={6}
                  textAlign="center"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(255,165,0,0.3)",
                  }}
                >
                  <a
                    href="https://nsdcindia.org/sector-skill-councils"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={logo}
                      alt={`Client Logo ${i + 1}`}
                      w="140px"
                      mx="auto"
                      fallbackSrc="https://via.placeholder.com/140?text=Logo"
                    />
                  </a>
                </MotionBox>
              ))}
            </SimpleGrid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}