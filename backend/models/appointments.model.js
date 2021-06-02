const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    doctor_id: String,
    doctor_Name: String,
    type: String,
    speciality: String,
    patient_id: String,
    Patient_Name: String,
    status: String,
    amount: String,
    appt_date: Date,
    booking_date: String,
    statues: String,
    create_at: Date,
    update_at: Date,
});

const Appointment = mongoose.model('appointment', appointmentSchema);

module.exports = Appointment;