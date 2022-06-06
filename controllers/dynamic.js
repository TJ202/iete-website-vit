//Schemas
const BoardMember = require('../models/boardModel');
const Contact = require('../models/contactModel');
const FacCoordinator = require('../models/coordinatorModel');
const Domain = require('../models/domainModel');

exports.loadData = async function(req, res){
    const board = await BoardMember.find({});
    const contact = await Contact.find({});
    const faccoord = await FacCoordinator.find({});
    const domains = await Domain.find({});

    res.render("../views/client-side/pages/index.ejs", {board, contact, faccoord, domains});
}

exports.boards = async function(req, res){
    const board = await BoardMember.find({});
    res.render("../views/admin-side/pages/board.ejs", {board});
}

exports.contacts = async function(req, res){
    const contact = await Contact.find({});
    res.render("../views/admin-side/pages/contact.ejs", {contact});
}
exports.domains = async function(req, res){
    const domain = await Domain.find({});
    res.render("../views/admin-side/pages/domain.ejs", {domain});
}
exports.facs = async function(req, res){
    const fac = await FacCoordinator.find({});
    res.render("../views/admin-side/pages/fac.ejs", {fac});
}