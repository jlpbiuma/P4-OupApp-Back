const mongoose = require('mongoose')

const photosSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: [true, "Es necesario especificar comentario para la foto"]
    },
    date: {
        type: mongoose.Schema.Types.Date,
        required: [true, "Es necesario especificar url de la foto"]
    },
    image:{
        type: String,
        required: [true, "Es necesario introducir la URL de la imagen"]
    },
    id_c: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Es necesario especificar id de cliente"]
    },
    id_s: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Es necesario especificar id de senior"]
    },
})

const photosModel = mongoose.model('Photos', photosSchema)
module.exports = photosModel