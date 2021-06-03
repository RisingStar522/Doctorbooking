const { Str } = require('@supercharge/strings/dist/str');
const mongoose = require('mongoose');

const patientsSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    birth: String,
    blood: String,
    gender: String,
    email: String,
    password: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
    paid: String,
    img: String,
    status: String,
    created_at: String,
    updated_at: String
});

const Patients = mongoose.model('Patients', patientsSchema);

module.exports = Patients;