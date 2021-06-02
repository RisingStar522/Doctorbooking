const mongoose = require('mongoose');

const prescriptionSchema = new mongoose.Schema({
    name: String,
    quantity: String,
    days: String,
    time_morning: String,
    time_afternoon: String,
    time_evening: String,
    time_night: String,
    created_by: String,
    patient_id: String,
    created_at: Date,
    updated_at: Date
});

const Prescription = mongoose.model('prescriptions', prescriptionSchema);

module.exports = Prescription;