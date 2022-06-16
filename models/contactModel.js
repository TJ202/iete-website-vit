const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  location: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: Number,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
