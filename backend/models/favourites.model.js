const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
    doctor_name: String,
    speciality: String,
    since: String,
    Education: String,
    Available: String,
    Earned: String,
    Price: String,
    profile: String,
    status: String,
    type: String,
    location: String,
    availableTime: String,
    consulting_fees: String,
    booking_fees: String,
    video_call: String,
    patient_id: String,
    create_at: Date,
    update_at: Date,
});

const Favourite = mongoose.model('favourite', favouriteSchema);

module.exports = Favourite;