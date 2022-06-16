const express = require("express");
const router = express.Router();

const coordinatorController = require("../controllers/coordinatorController");

router.get("/view-faccoord", coordinatorController.faculty);

module.exports = router;
