const express = require("express");
const router = express.Router();

const domainsController = require("../controllers/domainController");

router.get("/view-domain", domainsController.viewDomains);
router.post("/update-domain", domainsController.updateDomain);
router.post("/add-domain", domainsController.addDomain);
router.post("/delete-domain", domainsController.deleteDomain);

module.exports = router;
