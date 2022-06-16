const express = require("express");
const router = express.Router();

const boardController = require("../controllers/boardController");

router.get("/view-board", boardController.boards);
router.post("/update-board", boardController.updateBoard);

module.exports = router;
