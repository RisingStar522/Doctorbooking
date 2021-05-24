const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let administratorsSchema = new Schema({
    firstname: String,
    lastname: String,
    birth: String,
    email: String,
    password: String,
    phone: String,
    avatar: String,
    address: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
    joblevel: String,
    role: String,
    type: String,
    comment: String,
    myPatients: String,
    avatar: String,
    status: String,
    description:String,
    created_at: Date,
    update_at: Date

}, {
    collection: 'admin'
})

module.exports = mongoose.model('admin', administratorsSchema)