const express = require("express");
const api = express();

const { getPhotos,
        getAllPhotosBySeniorID,
        postPhoto,
        putPhoto,
        deletePhoto } = require("../controller/photo.controller.js");

// baseURL/api/photo/
api.get("/", getPhotos);
// baseURL/api/photo/:id
api.get("/:id", getAllPhotosBySeniorID);
// baseURL/api/photo/
api.post("/", postPhoto);
// baseURL/api/photo/:id
api.put("/:id", putPhoto);
// baseURL/api/photo/:id
api.delete("/:id", deletePhoto);

module.exports = api;