const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

const clientRoutes = require("./Routes/clientRoutes");
const itemRoutes = require("./Routes/itemRoutes");
const userRoutes = require("./Routes/userRoutes");
const quotationRoutes = require("./Routes/quotationRoutes");

dotenv.config();
connectDB();

const app = express();

// Middleware
const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/clients", clientRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/users", userRoutes);
app.use("/api/quotations", quotationRoutes);


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

