const FacCoordinator = require("../models/coordinatorModel");

exports.faculty = async function (req, res) {
  const fac = await FacCoordinator.find({});
  res.render("../views/admin-side/pages/fac.ejs", { fac });
};
