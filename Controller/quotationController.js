const Quotation = require("../models/quotationModel");
const Client = require("../Models/clientModel");

exports.createQuotation = async (req, res) => {
  try {
    const {
      clientId,
      quotationNo,
      quotationDate,
      from,
      items,
      subTotal,
      discount,
      taxableValue,
      gstAmount,
      totalAmount,
      amountInWords,
    } = req.body;

    const client = await Client.findById(clientId);
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }

    const quotation = new Quotation({
      client: client._id,
      quotationNo,
      quotationDate,
      from,
      items,
      subTotal,
      discount,
      taxableValue,
      gstAmount,
      totalAmount,
      amountInWords,
    });

    await quotation.save();
    res.status(201).json({ success: true, data: quotation });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getClientDetails = async (req, res) => {
  try {
    const { clientId } = req.params;
    const client = await Client.findById(clientId);
    if (!client) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.status(200).json({ success: true, data: client });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
