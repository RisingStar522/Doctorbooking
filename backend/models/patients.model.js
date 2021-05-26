const mongoose = require('mongoose');

const patientsSchema = new mongoose.Schema({
    role: String,
    name :  String,
    age : String,
    address : String,
    phone :  String,
    email :  String,
    lastvisit :  String,
    paid :  String,
    bloodgroup :  String,
    type :  String,
    img :  String,
});

const Patients = mongoose.model('Patients', patientsSchema);

module.exports = Patients;