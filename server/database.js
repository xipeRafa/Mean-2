const mongoose = require('mongoose'); //conectarce a DB
const URI = 'mongodb://localhost/mean-crud'; //nombre de la base de Datos

mongoose.connect(URI)
    //promesa para ver cuando se conecta
    .then(db => console.log('db is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;