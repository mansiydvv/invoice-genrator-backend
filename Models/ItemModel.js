// models/Item.js
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    itemType: { type: String, enum: ["Product", "Service"], required: true },
    itemName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    hsnOrSacCode: {
      type: String,
    },
    units: {
      type: String,
    },
    taxType: {
      type: String,
      enum: ["GST", "Other"],
      default: "GST",
    },
    taxRate: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
