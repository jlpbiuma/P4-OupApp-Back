const mongoose = require('mongoose')

const reminderSchema = new mongoose.Schema({
    initialDate: {
        type: mongoose.Schema.Types.Date,
        required: [true, "Es necesario especificar fecha inicial"]
    },
    finalDate: {
        type: mongoose.Schema.Types.Date,
        required: [true, "Es necesario especificar fecha final"]
    },
    title: {
        type: String,
        required: [true, "Es necesario especificar titulo"]
    },
    description: {
        type: String,
        required: [true, "Es necesario especificar descripcion"]
    },
    id_c:{ 
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Es necesario especificar id de cliente"]
    },
    id_s: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Es necesario especificar id de senior"]
    }
})

const reminderModel = mongoose.model('Reminder', reminderSchema )
module.exports = reminderModel