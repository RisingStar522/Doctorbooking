const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    doctor_name :String,
    speciality : String,
    speciality_profile : String,
    since : String,
    Education :String,
    Available : String,
    Earned : String,
    Price : String,
    profile : String,
    status : String,
    type : String,
    location : String,
    availableTime : String,
    consulting_fees : String,
    booking_fees :String,
    video_call : String
});

const Doctor = mongoose.model('doctor', doctorSchema);

module.exports = Doctor;