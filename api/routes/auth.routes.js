const express = require("express");
const api = express();

const {
    signup,
    login } = require("../controller/auth.controller");

// baseURL/api/auth/signup
api.post("/signup", signup);
// baseURL/api/auth/login
api.post("/login", login);

module.exports = api;