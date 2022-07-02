const Domain = require("../models/domainModel");

exports.viewDomains = async function (req, res) {
  const domain = await Domain.find({});
  res.render("../views/admin-side/pages/domain.ejs", { domain });
};

exports.updateDomain = async function (req, res) {
  const data = req.body;
  await Domain.findOneAndUpdate({ _id: data.id }, data, { new: true });
  res.redirect("/domain/view-domain");
};

exports.addDomain = async function (req, res) {
  const data = new Domain({
    domainIcon: req.body.domainIconAdd,
    domainName: req.body.domainNameAdd,
    description: req.body.descriptionAdd,
  });
  await data.save();
  res.redirect("/domain/view-domain");
};

exports.deleteDomain = async function (req, res) {
  const data = req.body;
  await Domain.deleteOne({ _id: data.id });
  res.redirect("/domain/view-domain");
};
