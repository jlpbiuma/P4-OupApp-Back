const Photo = require("../models/photo.model.js");

function getPhotos(req, res, next) {
    Photo.find()
        .then(photos => res.send(photos))
        .catch(err => res.send(err))
}

function getAllPhotosBySeniorID(req, res, next) {
    const id = mongoose.Types.ObjectId(req.params.id);
    Photo.find({id_s:id})
        .then(photos => res.send(photos))
        .catch(err => res.send(err))
}

function postPhoto(req, res, next) {
    req.body.id_c = req.locals.user._id;
    Photo.create(req.body)
        .then(photos => res.send(photos))
        .catch(err => res.send(err))
}

function putPhoto(req, res, next) {
    req.body.id_c = req.locals.user._id;
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