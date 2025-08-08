// controllers/info.controller.js
import Info from "../models/info.model.js";

export const getInfo = async (req, res) => {
  const { type } = req.query;
  try {
    const info = await Info.find({ type });
    res.status(200).json({ success: true, data: info });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createInfo = async (req, res) => {
  try {
    const item = new Info(req.body);
    const saved = await item.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
