const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    rol: {
        type: String,
        enum: ["client","senior"],
        default: "client"
    },
    image: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
    name: {
        type: String,
        required: [true, "Debes introducir el nombre"]
    },
    apellidos: {
        type: String,
        required: [true, "Debes introducir el apellido"]
    },
    dni: {
        type: String,
        required: [true, "Debes introducir el dni"]
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Este Email ya existe en nuestra Base de Datos"],
    },
    password: {
        type: String,
        minLength: [8,"Carácteres insuficientes"],
        required: [true,"Debes introducir la contraseña"]
    },
    phone:{
        type: String,
        minLength: [9,"Introduce un número válido"],
        required: [true,"Debes introducir el número de teléfono"]
    },
    id_c:{
        type: mongoose.Schema.Types.ObjectId
    }
})

const userModel = mongoose.model('User', userSchema )
module.exports = userModel