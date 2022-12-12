const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    actividad: {
        type: String,
        required: [true, "Es necesario especificar actividad"]
    },
    date: {
        type: mongoose.Schema.Types.Date,
        required: [true, "Es necesario especificar date"]
    },
    id_s: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "Es necesario especificar id de senior"]
    }
})

const activityModel = mongoose.model('Activity', activitySchema)
module.exports = activityModel