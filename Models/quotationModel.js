const mongoose = require("mongoose");

const quotationSchema = new mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Client",
      required: true,
    },
    quotationNo: { type: String, required: true },
    quotationDate: { type: Date, required: true },
    from: {
      businessName: String,
      email: String,
      contact: String,
      address: String,
      city: String,
      state: String,
      country: String,
      gstin: String,
    },
    items: [
      {
        description: String,
        hsnOrSacCode: String,
        quantity: Number,
        unit: String,
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
