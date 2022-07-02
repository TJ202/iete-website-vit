const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contactController");

router.get("/view-contact", contactController.contacts);
router.post("/update-contact", contactController.updateContact);

module.exports = router;
