import mongoose from "mongoose";

const infoSchema = new mongoose.Schema({
  type: { type: String, enum: ["about", "contact"], required: true },
  content: String,
  email: String,
  phone: String,
  address: String,
});

export default mongoose.model("Info", infoSchema);
