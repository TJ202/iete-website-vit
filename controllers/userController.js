const User = require("../models/userModel");
var session;

exports.newUser = (req, res) => {
  console.log("new user");
  const newUserDbDocument = new User({
    username: req.body.username,
    password: req.body.password,
  });

  newUserDbDocument.save(function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("successfully created");
    }
  });
};

exports.login = async function (req, res) {
  User.findOne({ username: req.body.username }).exec(function (error, user) {
    if (error) {
      console.log(error);
    } else if (!user) {
      console.log(error);
    } else {
      user.comparePassword(req.body.password, function (matchError, isMatch) {
        if (matchError) {
          console.log(matchError);
        } else if (!isMatch) {
          res.send(
            `Invalid username (${req.body.username}) or password (${req.body.password})`
          );
        } else {
          session = req.session;
          session.userid = req.body.username;
          res.render("admin-side/pages/index.ejs");
        }
      });
    }
  });
};

exports.logout = async function (req, res) {
  req.session.destroy();
  res.redirect("/admin");
};

exports.home = async function (req, res) {
  session = req.session;
  if (session.userid) {
    res.render("admin-side/pages/index.ejs");
  } else res.render("admin-side/pages/login.ejs");
};
