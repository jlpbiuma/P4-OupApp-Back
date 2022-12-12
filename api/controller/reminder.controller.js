const Reminder = require("../models/reminder.model.js");

function getReminders(req, res, next) {
    Reminder.find()
        .then(reminders => res.send(reminders))
        .catch(err => res.send(err))
}

function getAllRemindersBySeniorID(req, res, next) {
    Reminder.find({id_s:req.params.id})
        .then(reminders => res.send(reminders))
        .catch(err => res.send(err))
}

function postReminder(req, res, next) {
    req.body.id_c = res.locals.user._id;
    Reminder.create(req.body)
        .then(reminders => res.send(reminders))
        .catch(err => res.send(err))
}

function putReminder(req, res, next) {
    req.body.id_c = res.locals.user._id;
    Reminder.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(reminders => res.send(reminders))
        .catch(err => res.send(err))
}

function deleteReminder(req, res, next) {
    Reminder.findOneAndDelete({_id:req.params.id})
        .then(reminders => res.send(reminders))
        .catch(err => res.send(err))
}

module.exports = {
    getReminders,
    getAllRemindersBySeniorID,
    postReminder,
    putReminder,
    deleteReminder
}