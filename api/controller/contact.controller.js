const Contact = require("../models/contact.model.js");
var mongoose = require('mongoose');

function getContacts(req, res, next) {
    Contact.find()
        .then(contacts => res.send(contacts))
        .catch(err => res.send(err))
}

function getAllContactsBySeniorID(req, res, next) {
    const id = mongoose.Types.ObjectId(req.params.id);
    Contact.find({id_s:id})
        .then(contacts => {res.send(contacts)})
        .catch(err => res.send(err))
}

function postContact(req, res, next) {
    console.log(req.body);
    Contact.create(req.body)
        .then(contacts => res.send(contacts))
        .catch(err => res.send(err))
}

function putContact(req, res, next) {
    req.body.id_c = req.locals.user._id;
    Contact.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(contact => res.send(contact))
        .catch(err => res.send(err))
}

function deleteContact(req, res, next) {
    Contact.findOneAndDelete({_id:req.params.id})
        .then(contact => res.send(contact))
        .catch(err => res.send(err))
}

module.exports = {
    getContacts,
    getAllContactsBySeniorID,
    postContact,
    putContact,
    deleteContact
}