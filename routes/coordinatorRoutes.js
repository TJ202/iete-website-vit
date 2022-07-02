const express = require("express");
const router = express.Router();
const multer = require("multer");

const coordinatorController = require("../controllers/coordinatorController");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

router.get("/view-faccoord", coordinatorController.faculty);
router.post(
  "/update-faccoord",
  upload.single("coordImageAdd"),
  coordinatorController.updateCoordinator
);
router.post(
  "/add-faccoord",
  upload.single("coordImageAdd"),
  coordinatorController.addCoordinator
);

module.exports = router;
