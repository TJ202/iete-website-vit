const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
require('dotenv').config({path: '.env.sample'});

const dynamicData = require('../../controllers/dynamic');

const DB_URL = process.env.DB_URI;

// Render static files
router.use(express.static(__dirname + "public"));

router.get("/", dynamicData.loadData);

router.get("/member", (req, res) => {
    res.render("../views/client-side/pages/portfolio-details.ejs");
});

router.get("/event", (req, res) => {
    res.send("See the event");
});

router.get("/admin", (req, res)=>{
    res.render("../views/admin-side/pages/index.ejs");
});

router.get("/fac-coord", dynamicData.facs);

router.get("/board", dynamicData.boards);

router.get("/domain", dynamicData.domains);

router.get("/contact", dynamicData.contacts);

mongoose
    .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    console.log('✅ Database Connected!')
    })
    .catch((err) => {
    console.log('DB connect error:', err)
    });

module.exports = router;