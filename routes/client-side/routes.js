const express = require("express");
const router = express.Router();

// Render static files
router.use(express.static(__dirname + "public"));

router.get("/", (req, res) => {
    res.render("../views/client-side/pages/index.ejs");
});

router.get("/event", (req, res) => {
    res.send("See the event");
});

module.exports = router;