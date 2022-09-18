const BoardMember = require("../models/boardModel");
const Contact = require("../models/contactModel");
const FacCoordinator = require("../models/coordinatorModel");
const Domain = require("../models/domainModel");
const Event = require("../models/eventModel")
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const sendMail = require("../public/client-side/js/contact");

router.get("/", async(req, res) => {
    const board = await BoardMember.find({});
    const contact = await Contact.find({});
    const faccoord = await FacCoordinator.find({});
    const domains = await Domain.find({});
    const event = await Event.find({});
    const message = req.flash("msg");

    res.render("client-side/pages/index.ejs", {
        board: board,
        contact,
        faccoord,
        domains,
        event,
        message,
    });
});

router.get("/admin", userController.home);
router.post("/login", userController.login);
router.post("/signup", userController.newUser);

router.get("/logout", userController.logout);

router.post("/email", async(req, res) => {
    const { name, email, subject, message } = req.body;
    sendMail(name, email, subject, message, function(err, data) {
        if (err) {
            req.flash(
                "msg",
                "Uh-oh! Error occurred while submitting the form. Please try again."
            );
            req.flash("msg", "danger");
            res.redirect("/");
        } else {
            req.flash("msg", "Your message has been sent. Thank you!");
            req.flash("msg", "success");
            res.redirect("/");
        }
    });
});

module.exports = router;