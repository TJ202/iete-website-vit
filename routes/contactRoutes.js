const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contactController");

router.get("/view-contacts", contactController.contacts);
// router.post("/update-contacts", contactController.updateContacts);

module.exports = router;
