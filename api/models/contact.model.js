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
    image: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
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