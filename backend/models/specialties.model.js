const mongoose = require('mongoose');

const specialtiesSchema = new mongoose.Schema({
    specialty: {
        type: String,
        required: true
    },
    image: {
        type: String
    }
});

const Specialties = mongoose.model('Specialties', specialtiesSchema);

module.exports = Specialties;