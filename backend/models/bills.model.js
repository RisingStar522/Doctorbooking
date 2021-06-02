const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
    created_by: String,
    doctor_type: String,
    doctor_address: String,
    title: String,
    amount: String,
    patient_id: String,
    status: String,
    paid_time: Date,
    created_at: Date,
    updated_at: Date,
});

const Bill = mongoose.model('bill', billSchema);

module.exports = Bill;