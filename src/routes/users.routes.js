const express = require("express");
const usersController = require("../controllers/users.controller");
const router = express.Router();

// Create
router.post("/", usersController.add)
// Read All
router.get("/", usersController.getAll)
// Read One
router.get("/:id", usersController.getOne);
// Update
router.put("/:id", usersController.update)
// Delete
router.delete("/:id", usersController.remove) 

module.exports = router;