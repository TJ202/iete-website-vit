const BoardMember = require("../models/boardModel");
const fs = require("fs");
const { promisify } = require("util");
const unlinkAsync = promisify(fs.unlink);
const path = require("path");

exports.boards = async function(req, res) {
    const board = await BoardMember.find({});
    res.render("../views/admin-side/pages/board.ejs", { board: board });
};

exports.updateBoard = async function(req, res) {
    // console.log(req.file);
    await BoardMember.findOneAndUpdate({ _id: req.body.id }, {
        boardImage: {
            data: fs.readFileSync(
                path.join(__dirname + "/../uploads/" + req.file.filename)
            ),
            contentType: "image/png",
        },
        designation: req.body.designation,
        description: req.body.description,
        linkedin: req.body.linkedin,
        done: true,
    });
    await unlinkAsync(path.join(__dirname + "/../uploads/" + req.file.filename));
    res.redirect("/board/view-board");
};

exports.addBoard = async function(req, res) {
    // console.log(req.file);
    const data = new BoardMember({
        boardImage: {
            data: fs.readFileSync(
                path.join(__dirname + "/../uploads/" + req.file.filename)
            ),
            contentType: "image/png",
        },
        designation: req.body.designationAdd,
        description: req.body.descriptionAdd,
        linkedin: req.body.linkedinAdd,
    });
    await data.save();
    await unlinkAsync(path.join(__dirname + "/../uploads/" + req.file.filename));
    res.redirect("/board/view-board");
};

exports.deleteBoard = async function(req, res) {
    const data = req.body;
    await BoardMember.deleteOne({ _id: data.id });
    res.redirect("/board/view-board");
};