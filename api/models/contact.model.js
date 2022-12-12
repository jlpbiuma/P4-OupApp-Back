const mongoose = require('mongoose')

const contactsSchema = new mongoose.Schema({
    apodo: {
        type: String,
        required: [true, "Es necesario especificar apodo"]
    },
    phone: {
        type: String,
        required: [true, "Es necesario especificar telefono"]
    },
    profilePhoto: {
        base: {
            type: String,
            required: [true, "Es necesario especificar base de la imagen"]
        },
        data: {
            type: String,
            required: [true, "Es necesario especificar idatos de la imagen"]
        }
    },
    id_c: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Es necesario especificar id de cliente"]
    },
    id_s: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Es necesario especificar id de senior"]
    }
})

const contactModel = mongoose.model('Contacts', contactsSchema)
module.exports = contactModel