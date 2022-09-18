const Event = require("../models/eventModel");
const fs = require("fs");
const { promisify } = require("util");
const unlinkAsync = promisify(fs.unlink);
const path = require("path");

exports.events = async function(req, res) {
    const event = await Event.find({});
    res.render("../views/admin-side/pages/event.ejs", { event: event });
};

exports.updateEvent = async function(req, res) {
    // console.log(req.file);
    await Event.findOneAndUpdate({ _id: req.body.id }, {
        eventName: req.body.eventName,
        eventDescription: req.body.eventDescription,
        eventLink: req.body.eventLink,
        eventDate: req.body.eventDate,
        eventImage: {
            data: fs.readFileSync(
                path.join(__dirname + "/../uploads/" + req.file.filename)
            ),
            contentType: "image/png",
        },
        done: true,
    });
    await unlinkAsync(path.join(__dirname + "/../uploads/" + req.file.filename));
    res.redirect("/event/view-event");
};

exports.addEvent = async function(req, res) {
    // console.log(req.file);
    const data = new Event({
        eventName: req.body.eventNameAdd,
        eventDescription: req.body.eventDescriptionAdd,
        eventLink: req.body.eventLinkAdd,
        eventDate: req.body.eventDateAdd,
        eventImage: {
            data: fs.readFileSync(
                path.join(__dirname + "/../uploads/" + req.file.filename)
            ),
            contentType: "image/png",
        },
    });
    await data.save();
    await unlinkAsync(path.join(__dirname + "/../uploads/" + req.file.filename));
    res.redirect("/event/view-event");
};

exports.deleteEvent = async function(req, res) {
    const data = req.body;
    await Event.deleteOne({ _id: data.id });
    res.redirect("/event/view-event");
};