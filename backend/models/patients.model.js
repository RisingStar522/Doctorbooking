const mongoose = require('mongoose');

const patientsSchema = new mongoose.Schema({
    role: String,
    name: String,
    age: String,
    address: String,
    phone: String,
    email: String,
    lastvisit: String,
    paid: String,
    bloodgroup: String,
    type: String,
    img: String,
    password: String,
    create_at: Date,
    updateed_at: Date

});

const Patients = mongoose.model('Patients', patientsSchema);

module.exports = Patients;