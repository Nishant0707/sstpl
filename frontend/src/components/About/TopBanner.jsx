import React from "react";
import { Box, Heading, Image } from "@chakra-ui/react";

export default function TopBanner() {
  return (
    <Box position="relative" w="100%" h={{ base: "200px", md: "200px" }}>
      <Image
        src="/about.jpg"
        objectFit="cover"
        w="100%"
        h="100%"
        filter="brightness(0.7)"
      />
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        color="white"
      >
        <Heading fontSize={{ base: "2xl", md: "4xl" }}></Heading>
      </Box>
    </Box>
  );
}