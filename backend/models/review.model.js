const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    patient: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    ratings: {
        type: String,
        required: true
    },
    topatient: {
        type: String,
        required: true
    },
    todoctor: {
        type: String,
        required: true
    },
    topatientcomment: {
        type: String,
        required: true
    },
    todoctorcomment: {
        type: String,
        required: true
    },
    recommended: String,
    review: String,
    create_at: Date,
    update_at: Date,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;