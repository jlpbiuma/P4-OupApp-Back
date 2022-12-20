const Photo = require("../models/photo.model.js");
const mongoose = require('mongoose')

function getPhotos(req, res, next) {
    Photo.find()
        .then(photos => res.send(photos))
        .catch(err => res.send(err))
}

function getAllPhotosBySeniorID(req, res, next) {
    Photo.find({id_s:res.locals.user._id})
        .then(photos => res.send(photos))
        .catch(err => res.send(err))
}

function postPhoto(req, res, next) {
    Photo.create(req.body)
        .then(photo => res.send(photo))
        .catch(err => res.send(err))
}

function putPhoto(req, res, next) {
    Photo.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(photo => res.send(photo))
        .catch(err => res.send(err))
}

function deletePhoto(req, res, next) {
    Photo.findOneAndDelete({_id:req.params.id})
        .then(photo => res.send(photo))
        .catch(err => res.send(err))
}

module.exports = {
    getPhotos,
    getAllPhotosBySeniorID,
    postPhoto,
    putPhoto,
    deletePhoto
}