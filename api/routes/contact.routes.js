const express = require("express");
const api = express();

const {getContacts,
        getAllContactsBySeniorID,
        postContact,
        putContact,
        deleteContact} = require("../controller/contact.controller.js");

// baseURL/api/contact/
api.get("/", getContacts);
// baseURL/api/contact/:id
api.get("/:id", getAllContactsBySeniorID);
// baseURL/api/contact/
api.post("/", postContact);
// baseURL/api/contact/:id
api.put("/:id", putContact);
// baseURL/api/contact/:id
api.delete("/:id", deleteContact);

module.exports = api;