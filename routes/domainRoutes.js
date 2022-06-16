const express = require("express");
const router = express.Router();

const domainsController = require("../controllers/domainController");

router.get("/view-domain", domainsController.domains);
// router.post("/update-domain", domainsController.updateDomain);

module.exports = router;
