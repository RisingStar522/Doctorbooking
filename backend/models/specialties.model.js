const mongoose = require('mongoose');

const specialtiesSchema = new mongoose.Schema({
    speciality: {
        type: String,
        required: true
    },
    img: {
        type: String
    }
});

const Specialties = mongoose.model('Specialties', specialtiesSchema);

module.exports = Specialties;