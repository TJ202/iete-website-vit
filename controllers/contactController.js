const Contact = require("../models/contactModel");

exports.contacts = async function (req, res) {
  const contact = await Contact.find({});
  res.render("../views/admin-side/pages/contact.ejs", { contact });
};

exports.updateContact = async function (req, res) {
  const data = req.body;
  await Contact.findOneAndUpdate({ _id: data.id }, data, { new: true });
  res.redirect("/contact/view-contact");
};
