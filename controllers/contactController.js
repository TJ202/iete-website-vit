const Contact = require("../models/contactModel");

exports.contacts = async function (req, res) {
  const contact = await Contact.find({});
  res.render("../views/admin-side/pages/contact.ejs", { contact });
};
