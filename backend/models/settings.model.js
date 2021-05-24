const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
    sitetitle: String,
    logo: String,
    favicon: String
});

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;