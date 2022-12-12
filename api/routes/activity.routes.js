const express = require("express");
const api = express();

const { getAllActivitiesByClientID,
    getAllActivitiesBySeniorID,
    postActivityBySeniorID,
    deleteAllActivitiesBySeniorID,
    deleteAllActivitiesByClientID } = require("../controller/activity.controller.js");

//GET: baseURL/api/activity/
api.get("/", getAllActivitiesByClientID);
//GET: baseURL/api/activity/:id
api.get("/:id", getAllActivitiesBySeniorID);
//POST: baseURL/api/activity/:id
api.post("/:id", postActivityBySeniorID);
//DELETE: baseURL/api/activity/senior/:id
api.delete("senior/:id", deleteAllActivitiesBySeniorID);
//DELETE: baseURL/api/activity/client/:id
api.delete("client/:id", deleteAllActivitiesByClientID);

module.exports = api;