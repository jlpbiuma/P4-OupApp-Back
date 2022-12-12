const User = require("../models/user.model");
const {
    signup
} = require('./auth.controller.js')

function getUsers(req, res, next) {
    User.find()
        .then(users => res.send(users))
        .catch(err => res.send(err))
}

function getUserByID(req, res, next) {
    User.find({ _id: req.params.id })
        .then(users => res.send(users))
        .catch(err => res.send(err))
}

function putUserByID(req, res, next) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(user => res.send(user))
        .catch(err => res.send(err))
}

function deleteUserByID(req, res, next) {
    User.findOneAndDelete({ _id: req.params.id })
        .then(user => res.send(user))
        .catch(err => res.send(err))
}

function getAllFamilyMembersByClientID(req, res, next) {
    User.find({ id_c: req.params.id })
        .then(users => res.send(users))
        .catch(err => res.send(err))
}

function getFamilyMemberByID(req, res, next) {
    User.find({ _id: req.params.id })
        .then(users => res.send(users))
        .catch(err => res.send(err))
}

function postFamilyMemberByClientID(req, res, next) {
    signup(req,res)
}

function putFamilyMemberBySeniorID(req, res, next) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(users => res.send(users))
        .catch(err => res.send(err))
}

module.exports = {
    getUsers,
    getUserByID,
    putUserByID,
    deleteUserByID,
    getAllFamilyMembersByClientID,
    getFamilyMemberByID,
    postFamilyMemberByClientID,
    putFamilyMemberBySeniorID
}