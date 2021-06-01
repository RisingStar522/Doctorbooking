const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const doctorSchema = db.doctor;
const patientSchema = db.patients;
const administratorsSchema = db.administratorsSchema;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {


    console.log(req.body)
    if (req.body.isPatient) {
        const patient = new patientSchema({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            Phone: req.body.phone,
            create_at: Date(),
            updateed_at: Date()
        });
        patient.save((err, result) => {
            if (err) {
                res.send({
                    status: "failed",
                    data: {},
                    msg: `Something went wrong ${err}`,
                });
                return;
            }

            var token = jwt.sign({ id: result.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            res.status(200).send({
                status: "success",
                token_user: token,
                msg: ""
            });
        });
    } else {
        const doctor = new doctorSchema({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            Phone: req.body.phone,
            create_at: Date(),
            updateed_at: Date()
        });
        doctor.save((err, result) => {
            if (err) {
                res.send({
                    status: "failed",
                    data: {},
                    msg: `Something went wrong ${err}`,
                });
                return;
            }

            var token = jwt.sign({ id: result.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            res.status(200).send({
                status: "success",
                token_user: token,
                msg: ""
            });
        });
    }
};

exports.signin = (req, res) => {

    doctorSchema.findOne({
            email: req.body.username
        })
        .exec((err, doctor) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            if (!doctor) {
                return res.status(200).send({ status: "failed", data: {}, msg: "Email does not exist" });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                doctor.password
            );

            if (!passwordIsValid) {
                return res.status(200).send({ status: "failed", data: {}, msg: "Password invalid" });
            }

            var token = jwt.sign({ id: doctor._id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            var authorities = "ROLE_" + doctor.role;

            res.status(200).send({
                status: "success",
                accessToken: token,
                data: {
                    id: doctor._id,
                    doctor_name: doctor.doctor_name,
                    email: doctor.email,
                    speciality: doctor.speciality,
                    speciality_photo: doctor.speciality_profile,
                    Earned: doctor.Earned,
                    Education: doctor.Education,
                    avatar: doctor.profile,
                    comment: doctor.comment,
                    type: doctor.type,
                    location: doctor.location,
                    accessToken: token
                },
                msg: ""
            });
        });
};

exports.signin_patient = (req, res) => {

    patientSchema.findOne({
            email: req.body.username
        })
        .exec((err, patient) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            if (!patient) {
                return res.status(200).send({ status: "failed", data: {}, msg: "Email does not exist" });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                patient.password
            );

            if (!passwordIsValid) {
                return res.status(200).send({ status: "failed", data: {}, msg: "Password invalid" });
            }

            var token = jwt.sign({ id: patient._id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            var authorities = "ROLE_" + patient.role;

            res.status(200).send({
                status: "success",
                accessToken: token,
                data: {
                    id: patient._id,
                    name: patient.name,
                    email: patient.email,
                    avatar: patient.img,
                    bloodgroup: patient.bloodgroup,
                    type: patient.type,
                    phone: patient.phone,
                    address: patient.address,
                    accessToken: token
                },
                msg: ""
            });
        });
};

exports.signup_admin = (req, res) => {
    const admin = new administratorsSchema({
        first_name: req.body.sign_firstName,
        last_name: req.body.sign_lastname,
        email: req.body.sign_email,
        password: bcrypt.hashSync(req.body.sign_password, 8),
        role: "Admin"
    });

    admin.save((err, admin) => {
        if (err) {
            res.send({
                status: "failed",
                data: {},
                msg: `Something went wrong ${err}`,
            });
            return;
        }

        var token = jwt.sign({ id: admin.id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });

        var authorities = "ROLE_" + admin.role;

        res.status(200).send({
            status: "success",
            data: {
                id: admin._id,
                firstname: admin.first_name,
                lastname: admin.last_name,
                email: admin.email,
                role: authorities,
                mobile: admin.mobile,
                office_phone: admin.office_phone,
                avatar: admin.avatar,
                comment: admin.comment,
                type: admin.type,
                status: admin.status,
                address: admin.address,
                accessToken: token
            },
            msg: ""
        });
    });
};

exports.signin_admin = (req, res) => {
    administratorsSchema.findOne({
            email: req.body.username
        })
        .populate("roles", "-__v")
        .exec((err, admin) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            if (!admin) {
                return res.status(200).send({ status: "failed", data: {}, msg: "Email does not exist." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                admin.password
            );

            if (!passwordIsValid) {
                return res.status(200).send({ status: "failed", data: {}, msg: "Password invailed" });
            }

            var token = jwt.sign({ id: admin.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            var authorities = "ROLE_" + admin.role;

            res.status(200).send({
                status: "success",
                accessToken: token,
                data: {
                    id: admin._id,
                    firstname: admin.first_name,
                    lastname: admin.last_name,
                    email: admin.email,
                    role: authorities,
                    mobile: admin.mobile,
                    office_phone: admin.office_phone,
                    avatar: admin.avatar,
                    comment: admin.comment,
                    type: admin.type,
                    status: admin.status,
                    address: admin.address,
                    accessToken: token
                },
                msg: ""
            });
        });
};