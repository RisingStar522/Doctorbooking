const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: String,
    price: String,
    gender: String,
    earn: String,
    paid: String,
    balance: String,
    services: String,
    specialties: String,
    blood:String,
    clinicname: String,
    clinicaddress: String,
    rating_option: String,
    custom_rating_count: String,
    educations: String,
    experiences: String,
    awards: String,
    memberships: String,
    registrations: String,
    status: String,
    review: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    birth: String,
    zipcode: String,
    country: String,
    memtype: String,
    content: String,
    favourites: String,
    description: String,
    create_at: Date,
    update_at: Date,
    avatar: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;