const mongoose = require('mongoose');
const scheduleSchema = new mongoose.Schema({
    schedulename: String,
    user: String,
    duration: String,
    sunday: String,
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String
});
const Schedule = mongoose.model('Schedule', scheduleSchema);
module.exports = Schedule;