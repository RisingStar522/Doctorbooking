const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.speicalties = require("./specialties.model");
db.products = require("./products.model");
db.settings = require("./settings.model");
db.review = require("./review.model");
db.schedule = require("./schedule.model");
db.administratorsSchema = require('./admin.model');

module.exports = db;