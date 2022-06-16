const Domain = require("../models/domainModel");

exports.domains = async function (req, res) {
  const domain = await Domain.find({});
  res.render("../views/admin-side/pages/domain.ejs", { domain });
};
