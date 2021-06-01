const db = require("../models");
const User = db.user;
const administratorsSchema = db.administratorsSchema;
const doctorSchema = db.doctor;
const patientSchema = db.patients

checkDuplicateUserEmail = (req, res, next) => {
    // Email
    User.findOne({
        email: req.body.sign_email
    }).exec((err, user) => {
        if (err) {
            res.send({
                status: "failed",
                data: {},
                msg: `Something went wrong ${err}`,
            });
            return;
        }

        if (user) {
            res.send({
                status: "failed",
                data: {},
                msg: `Email is already in use!`,
            });
            return;
        }

        next();
    });
};

checkDuplicateAdminEmail = (req, res, next) => {
    // Email
    administratorsSchema.findOne({
        email: req.body.sign_email
    }).exec((err, user) => {
        if (err) {
            res.send({
                status: "failed",
                data: {},
                msg: `Something went wrong ${err}`,
            });
            return;
        }

        if (user) {
            res.send({
                status: "failed",
                data: {},
                msg: `Email is already in use!`,
            });
            return;
        }

        next();
    });
};


checkDuplicateDoctorEmail = (req, res, next) => {
    // Email
    doctorSchema.findOne({
        email: req.body.email
    }).exec((err, user) => {
        if (err) {
            res.send({
                status: "failed",
                data: {},
                msg: `Something went wrong ${err}`,
            });
            return;
        }

        if (user) {
            res.send({
                status: "failed",
                data: {},
                msg: `Email is already in use!`,
            });
            return;
        }

        next();
    });
};

checkDuplicatePatientsEmail = (req, res, next) => {
    // Email
    patientSchema.findOne({
        email: req.body.email
    }).exec((err, user) => {
        if (err) {
            res.send({
                status: "failed",
                data: {},
                msg: `Something went wrong ${err}`,
            });
            return;
        }

        if (user) {
            res.send({
                status: "failed",
                data: {},
                msg: `Email is already in use!`,
            });
            return;
        }

        next();
    });
};

const verifySignUp = {
    checkDuplicateUserEmail,
    checkDuplicateAdminEmail,
    checkDuplicateDoctorEmail,
    checkDuplicatePatientsEmail
};

module.exports = verifySignUp;