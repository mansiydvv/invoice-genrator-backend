const mongoose = require("mongoose");

const quotationSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    quotationNumber: { type: String, required: true },
    quotationDate: { type: Date, required: true },

    quotationFrom: {
      businessName: String,
      address: String,
      state: String,
      country: String,
      contact: String,
      email: String,
      gstin: String,
    },

    services: [
      {
        description: String,
        hsn: String,
        quantity: Number,
        units: String,
        price: Number,
        amount: Number,
      },
    ],

    subTotal: Number,
    discount: Number,
    taxableValue: Number,
    gstAmount: Number,
    totalAmount: Number,
    amountInWords: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quotation", quotationSchema);
