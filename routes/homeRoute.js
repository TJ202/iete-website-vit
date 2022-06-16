const BoardMember = require("../models/boardModel");
const Contact = require("../models/contactModel");
const FacCoordinator = require("../models/coordinatorModel");
const Domain = require("../models/domainModel");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const board = await BoardMember.find({});
  const contact = await Contact.find({});
  const faccoord = await FacCoordinator.find({});
  const domains = await Domain.find({});

  res.render("client-side/pages/index.ejs", {
    board,
    contact,
    faccoord,
    domains,
  });
});

router.get("/admin", async (req, res) => {
  res.render("admin-side/pages/index.ejs");
});

module.exports = router;
