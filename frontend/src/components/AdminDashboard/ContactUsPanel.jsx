import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Input,
  Select,
  Divider,
  Spinner,
} from "@chakra-ui/react";
import axios from "axios";

const ContactUsPanel = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    axios.get("/api/contact/all").then((res) => {
      setData(res.data);
      setFilteredData(res.data);
    });
  }, []);

  useEffect(() => {
    let temp = [...data];
    if (dateFilter) {
      temp = temp.filter((item) =>
        item.createdAt.startsWith(dateFilter)
      );
    }
    temp.sort((a, b) => {
      return sortOrder === "asc"
        ? new Date(a.createdAt) - new Date(b.createdAt)
        : new Date(b.createdAt) - new Date(a.createdAt);
    });
    setFilteredData(temp);
  }, [dateFilter, sortOrder, data]);

  return (
    <Box bg="white" minH="100vh" py={10}>
      <Container maxW="6xl">
        <Heading mb={6}>Admin: Contact Messages</Heading>
        <HStack spacing={4} mb={6}>
          <Input
            type="date"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          />
          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">Newest First</option>
            <option value="asc">Oldest First</option>
          </Select>
        </HStack>

        {filteredData.length === 0 ? (
          <Spinner />
        ) : (
          <VStack align="stretch" spacing={5}>
            {filteredData.map((entry, idx) => (
              <Box
                key={idx}
                p={4}
                boxShadow="md"
                borderRadius="md"
                border="1px solid #eee"
              >
                <Text fontWeight="bold">💬 Contact Message</Text>
                <Text>Name: {entry.name}</Text>
                <Text>Email: {entry.email}</Text>
                {entry.phone && <Text>Phone: {entry.phone}</Text>}
                <Text>Message: {entry.message}</Text>
                <Text fontSize="sm" color="gray.500">
                  Date: {new Date(entry.createdAt).toLocaleString()}
                </Text>
              </Box>
            ))}
          </VStack>
        )}
        <Divider mt={10} />
        <Text mt={4} fontSize="sm" color="gray.600" textAlign="center">
          You’re viewing {filteredData.length} messages.
        </Text>
      </Container>
    </Box>
  );
};

export default ContactUsPanel;