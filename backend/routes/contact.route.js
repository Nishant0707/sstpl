import express from "express";
import {
  createContact,
  getAllContacts,
} from "../controllers/contact.controller.js";

const router = express.Router();

// POST: Create a new contact message
router.post("/", createContact);

// GET: Fetch all contact messages (Admin view)
router.get("/all", getAllContacts);

export default router;