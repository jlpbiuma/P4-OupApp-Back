const mongoose = require('mongoose')

const photosSchema = new mongoose.Schema({
    base: {
        type: String,
        required: [true, "Es necesario especificar base de la foto"]
    },
    data: {
        type: String,
        required: [true, "Es necesario especificar datos de la foto"]
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