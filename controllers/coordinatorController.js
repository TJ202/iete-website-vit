const FacCoordinator = require("../models/coordinatorModel");
const fs = require("fs");
const { promisify } = require("util");
const unlinkAsync = promisify(fs.unlink);
const path = require("path");

exports.faculty = async function (req, res) {
  const fac = await FacCoordinator.find({});
  res.render("../views/admin-side/pages/fac.ejs", { fac });
};

exports.updateCoordinator = async function (req, res) {
  console.log(req.body.id);
  await FacCoordinator.findOneAndUpdate(
    { _id: req.body.id },
    {
      coordImage: {
        data: fs.readFileSync(
          path.join(__dirname + "/../uploads/" + req.file.filename)
        ),
        contentType: "image/png",
      },
      sideText: req.body.sideText,
      done: true,
    }
  );
  await unlinkAsync(path.join(__dirname + "/../uploads/" + req.file.filename));
  res.redirect("/coordinator/view-faccoord");
};

exports.addCoordinator = async function (req, res) {
  const data = new FacCoordinator({
    coordImage: {
      data: fs.readFileSync(
        path.join(__dirname + "/../uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
    sideText: req.body.sideText,
  });
  await data.save();
  await unlinkAsync(path.join(__dirname + "/../uploads/" + req.file.filename));
  res.redirect("/coordinator/view-faccoord");
};
