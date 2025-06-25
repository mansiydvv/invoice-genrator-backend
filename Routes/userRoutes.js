const express = require("express");
const router = express.Router();
const userController = require("../Controller/userController");
const { protect, authorizeRoles } = require("../middleware/authMiddleware");

router.post("/register",userController.createUser);
router.post("/login", userController.loginUser);

// Protected routes
router.get("/", protect, authorizeRoles("Admin"), userController.getUsers);
router.get("/:id", protect, userController.getUserById);
router.put("/:id", protect, authorizeRoles("Admin"), userController.updateUser);
router.delete("/:id",protect,authorizeRoles("Admin"),userController.deleteUser);

module.exports = router;
