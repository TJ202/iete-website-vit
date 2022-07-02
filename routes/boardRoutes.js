const express = require("express");
const router = express.Router();
const multer = require("multer");

const boardController = require("../controllers/boardController");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

router.get("/view-board", boardController.boards);
router.post(
  "/update-board",
  upload.single("boardImageAdd"),
  boardController.updateBoard
);
router.post(
  "/add-board",
  upload.single("boardImageAdd"),
  boardController.addBoard
);
router.post("/delete-board", boardController.deleteBoard);

module.exports = router;
