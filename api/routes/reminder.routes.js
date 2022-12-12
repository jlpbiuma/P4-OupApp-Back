const express = require("express");
const api = express();

const {getReminders,
        getAllRemindersBySeniorID,
        postReminder,
        putReminder,
        deleteReminder} = require("../controller/reminder.controller.js");

// baseURL/api/reminder/
api.get("/", getReminders);
// baseURL/api/reminder/:id
api.get("/:id", getAllRemindersBySeniorID);
// baseURL/api/reminder/
api.post("/", postReminder);
// baseURL/api/reminder/:id
api.put("/:id", putReminder);
// baseURL/api/reminder/:id
api.delete("/:id", deleteReminder);

module.exports = api;