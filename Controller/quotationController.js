const Quotation = require("../Models/quotationModel");
const Client = require("../Models/clientModel");

// ============ Create new quotation =============
exports.createQuotation = async (req, res) => {
  try {
    const { clientId, ...quotationData } = req.body;

    const client = await Client.findById(clientId);
    if (!client) {
      return res.status(404).json({ success: false, message: "Client not found" });
    }

    const quotation = await Quotation.create({ client: clientId, ...quotationData });

    res.status(201).json({ success: true, data: quotation });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// =========== Get all quotations with populated client info ===========
exports.getAllQuotations = async (req, res) => {
  try {
    const quotations = await Quotation.find().populate({
      path: "client",
      select: "name companyName email number billingAddress city state country pincode gstin"
    });

    res.status(200).json({ success: true, data: quotations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

 
//============== Get single quotation by ID ================
exports.getQuotationById = async (req, res) => {
  try {
    const quotation = await Quotation.findById(req.params.id).populate("client");

    if (!quotation) {
      return res.status(404).json({ success: false, message: "Quotation not found" });
    }

    res.status(200).json({ success: true, data: quotation });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
