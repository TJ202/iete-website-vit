const mongoose = require("mongoose");

const facCoordinatorSchema = mongoose.Schema({
  coordImage: {
    data: Buffer,
    contentType: String,
  },
  sideText: {
    type: String,
  },
});

const FacCoordinator = mongoose.model("FacCoordinator", facCoordinatorSchema);

module.exports = FacCoordinator;
