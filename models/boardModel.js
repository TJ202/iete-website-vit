const mongoose = require("mongoose");

const boardSchema = mongoose.Schema({
  boardImage: {
    data: Buffer,
    contentType: String,
  },
  designation: {
    type: String,
  },
  description: {
    type: String,
  },
  linkedin: {
    type: String,
  },
});

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;
