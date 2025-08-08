import Contact from "../models/Contact.model.js";

// Create a new contact message
export const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        error: "All fields (name, email, phone, message) are required.",
      });
    }

    const newContact = new Contact({ name, email, phone, message });
    const savedContact = await newContact.save();

    res.status(201).json({
      message: "Message sent successfully!",
      data: savedContact,
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};

// Get all contact messages (Admin panel)
export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({ error: "Failed to fetch contact data." });
  }
};