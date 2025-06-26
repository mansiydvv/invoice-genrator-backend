const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

router.post("/adduser",userController.createUser);
router.post("/login", userController.loginUser);

// Protected routes
router.get("/getAll", userController.getUsers);
router.get("/get/:id", protect, userController.getUserById);
router.put("/update/:id",  userController.updateUser);
router.delete("/delete/:id",userController.deleteUser);

module.exports = router;
