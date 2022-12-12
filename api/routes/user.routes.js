const express = require("express");
const api = express();

const { getUsers,
    getUserByID,
    putUserByID,
    deleteUserByID,
    getAllFamilyMembersByClientID,
    getFamilyMemberByID,
    postFamilyMemberByClientID,
    putFamilyMemberBySeniorID } = require("../controller/user.controller.js");

//GET: baseURL/api/user/
api.get("/", getUsers);
//GET: baseURL/api/user/:id
api.get("/:id", getUserByID);
//PUT: baseURL/api/user/:id
api.put("/:id", putUserByID)
//DELETE: baseURL/api/user/:id
api.delete("/:id", deleteUserByID)

//GET: baseURL/api/user/senior/family/:id
api.get("/senior/family/:id", getAllFamilyMembersByClientID);
//GET: baseURL/api/user/senior/:id
api.get("/senior/:id", getFamilyMemberByID)
//POST: baseURL/api/user/senior/
api.post("/senior/", postFamilyMemberByClientID);
//PUT: baseURL/api/user/senior/:id
api.put("/senior/:id", putFamilyMemberBySeniorID);

module.exports = api;