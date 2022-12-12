const Activity = require('../models/activity.model.js')

function getAllActivitiesByClientID(res, req, next) {
    Activity.find({id_c:req.locals.user})
        .then(activities => res.send(activities))
        .catch(err => res.send(err))
}

function getAllActivitiesBySeniorID(req, res, next) {
    Activity.find({id_s:req.params.id})
        .then(activities => res.send(activities))
        .catch(err => res.send(err))
}

function postActivityBySeniorID(req, res, next) {
    Activity.create(req.body)
        .then(contacts => res.send(contacts))
        .catch(err => res.send(err))
}

function deleteAllActivitiesBySeniorID(req, res, next) {
    Activity.deleteMany({id_s:req.params.id})
        .then(activities => res.send(activities))
        .catch(err => res.send(err))
}

function deleteAllActivitiesByClientID(req, res, next) {
    Activity.deleteMany({id_c:req.locals.user})
        .then(activities => res.send(activities))
        .catch(err => res.send(err))
}

module.exports = {
    getAllActivitiesByClientID,
    getAllActivitiesBySeniorID,
    postActivityBySeniorID,
    deleteAllActivitiesBySeniorID,
    deleteAllActivitiesByClientID
}