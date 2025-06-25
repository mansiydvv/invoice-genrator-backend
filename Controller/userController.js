const { config } = require("dotenv");
const User = require("../Models/userModel");
const jwt = require('jsonwebtoken');
config().dotenv; 

// Generate JWT Token
const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

// ====================== Register User ==============
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

// ====================== Login =====================
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      success: true,
      token: generateToken(user._id),
      data: user
    });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
};

//================ Get All Users (Admin only) =================
exports.getUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json({ success: true, data: users });
};

//================ Get Single User ===================
exports.getUserById = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (!user) return res.status(404).json({ success: false, message: 'User not found' });
  res.json({ success: true, data: user });
};

// =============== Update User (Admin only) ===========
exports.updateUser = async (req, res) => {
  const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ success: true, data: updated });
};

// ================ Delete User (Admin only) ============
exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ success: true, message: 'User deleted' });
};
