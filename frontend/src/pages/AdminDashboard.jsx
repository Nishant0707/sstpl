import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Text,
  VStack,
  Button,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ✅ Correct icon imports
import { FaChartLine } from "react-icons/fa";
import {
  MdGroup,
  MdUploadFile,
  MdOutlineAdminPanelSettings,
  MdLogout,
} from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { TbUsersGroup } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

// Panels
import JobInfo from "../components/AdminDashboard/JobInfoPanel";
import ContactUsInfo from "../components/AdminDashboard/ContactUsPanel";
import TeamPhoto from "../components/AdminDashboard/TeamPhotoPanel";
import Photos from "../components/AdminDashboard/Photos";
import AdminCreatePanel from "../components/AdminDashboard/AdminCreatePanel";
import Logout from "../components/AdminDashboard/Logout";

const pieData = [{ name: "Admin", value: 100 }];
const COLORS = ["#2B6CB0"];

const barData = [
  { name: "Jan", users: 3 },
  { name: "Feb", users: 5 },
  { name: "Mar", users: 8 },
  { name: "Apr", users: 6 },
  { name: "May", users: 12 },
  { name: "Jun", users: 9 },
];

const lineData = [
  { name: "Mo", value: 10 },
  { name: "Tu", value: 25 },
  { name: "We", value: 20 },
  { name: "Th", value: 15 },
  { name: "Fr", value: 18 },
  { name: "Sa", value: 14 },
  { name: "Su", value: 10 },
];

const AdminDashboard = () => {
  const [activeView, setActiveView] = useState("home");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) navigate("/signup");
  }, [navigate]);

  const renderContent = () => {
    switch (activeView) {
      case "jobinfo":
        return <JobInfo />;
      case "contact":
        return <ContactUsInfo />;
      case "upload":
        return <TeamPhoto />;
      case "Photos":
        return <Photos />;
      case "createadmin":
        return <AdminCreatePanel />;
      default:
        return (
          <>
            <Text fontSize="3xl" fontWeight="bold" mb={6} color="gray.700">
              Dashboard Overview
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={6}>
              <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
                <Text fontSize="md" mb={2} color="gray.600">
                  Pie Chart - Admin Roles
                </Text>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      dataKey="value"
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Box>
              <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
                <Text fontSize="md" mb={2} color="gray.600">
                  Bar Chart - User Activity
                </Text>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={barData}>
                    <XAxis dataKey="name" stroke="#4A5568" />
                    <YAxis stroke="#4A5568" />
                    <Tooltip />
                    <Bar dataKey="users" fill="#ED8936" barSize={30} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </SimpleGrid>
            <Box bg="white" p={6} borderRadius="xl" boxShadow="md">
              <Text fontSize="md" mb={2} color="gray.600">
                Line Chart - Weekly Visits
              </Text>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={lineData}>
                  <XAxis dataKey="name" stroke="#4A5568" />
                  <YAxis stroke="#4A5568" />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#48BB78"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </Box>
          </>
        );
    }
  };

  const navItems = [
    { key: "home", label: "Dashboard", icon: FaChartLine },
    { key: "createadmin", label: "Create Admin", icon: MdOutlineAdminPanelSettings },
    { key: "jobinfo", label: "Job Info", icon: MdGroup },
    { key: "contact", label: "Contact Us", icon: IoMdContact },
    { key: "upload", label: "Team Photo", icon: MdUploadFile },
    { key: "Photos", label: "Photos", icon: TbUsersGroup },
  ];

  return (
    <Flex minH="100vh" bg="gray.50" color="gray.800">
      {/* Sidebar */}
      <Box
        w={{ base: "64px", md: "220px" }}
        bg="white"
        borderRight="1px solid #E2E8F0"
        p={4}
        pt={6}
        boxShadow="sm"
        position="sticky"
        top="0"
        h="100vh"
      >
        <VStack spacing={4} align="stretch">
          <Text
            fontSize="xl"
            fontWeight="bold"
            textAlign="center"
            color="teal.600"
            display={{ base: "none", md: "block" }}
          >
            Admin Panel
          </Text>
          {navItems.map(({ key, label, icon }) => (
            <Button
              key={key}
              leftIcon={<Icon as={icon} boxSize={5} />}
              onClick={() => setActiveView(key)}
              justifyContent="flex-start"
              variant="ghost"
              colorScheme={activeView === key ? "teal" : "gray"}
              fontWeight={activeView === key ? "bold" : "normal"}
              _hover={{ bg: "teal.50" }}
              size="md"
              px={3}
            >
              <Text display={{ base: "none", md: "block" }}>{label}</Text>
            </Button>
          ))}
          {/* Logout Component */}
          <Logout />
        </VStack>
      </Box>

      {/* Main Content */}
      <Box flex="1" p={6} overflowY="auto">
        {renderContent()}
      </Box>
    </Flex>
  );
};

export default AdminDashboard;