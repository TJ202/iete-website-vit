const BoardMember = require("../models/boardModel");

exports.updateBoard = async function (req, res) {
  try {
    var boardDetails = new BoardMember({
      boardImage: req.body.boardImage,
      designation: req.body.designation,
      description: req.body.description,
      linkedin: req.body.linkedin,
    });

    boardDetails.save((err, doc) => {
      if (!err) console.log("reaced");
      else console.log("Error during record insertion : " + err);
    });
  } catch (e) {
    res.send(e);
  }
};
exports.boards = async function (req, res) {
  const board = await BoardMember.find({});
  res.render("../views/admin-side/pages/board.ejs", { board });
};
