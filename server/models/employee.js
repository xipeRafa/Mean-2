const mongoose = require('mongoose'); //conectarse
const { Schema } = mongoose; //esquema de DB

const employeeSchema = new Schema({
    name: { type: String, required: true },
    position: { type: String, required: true },
    office: { type: String, required: true },
    salary: { type: Number, required: true }
});
//le esta diciendo a mongoDB como luciran los datos
module.exports = mongoose.model('Employee', employeeSchema);