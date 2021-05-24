const config = require("../config/auth.config");

const db = require("../models");
const User = db.user;
const administratorsSchema = db.administratorsSchema;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    const user = new User({
        firstname: req.body.sign_firstName,
        lastname: req.body.sign_lastname,
        email: req.body.sign_email,
        password: bcrypt.hashSync(req.body.sign_password, 8),
        role: req.body.role,
        paid: 0,
        earn: 0,
        review: "0",
        status: "0",
        phone: req.body.sign_phone,
        create_at: Date(),
        updateed_at: Date()
    });
    user.save((err, user) => {
        if (err) {
            res.send({
                status: "failed",
                data: {},
                msg: `Something went wrong ${err}`,
            });
            return;
        }

        var token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // 24 hours
        });

        var authorities = "ROLE_" + user.role;

        res.status(200).send({
            status: "success",
            data: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: authorities,
                phone: user.phone,
                earn: user.earn,
                paid: user.paid,
                balance: 0,
                accessToken: token
            },
            msg: ""
        });
    });
};

exports.signin = (req, res) => {
    User.findOne({
            email: req.body.email
        })
        .populate("roles", "-__v")
        .exec((err, user) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            if (!user) {
                return res.status(200).send({ status: "failed", data: {}, msg: "Email does not exist" });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(200).send({ status: "failed", data: {}, msg: "Password invalid" });
            }

            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            var authorities = "ROLE_" + user.role;

            res.status(200).send({
                status: "success",
                data: {
                    id: user._id,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    email: user.email,
                    status: user.status,
                    mobile: user.mobile,
                    phone: user.phone,
                    role: user.role,
                    accessToken: token
                },
                msg: "Successfully logined"
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
            email: req.body.email
        })
        .populate("roles", "-__v")
        .exec((err, admin) => {
            if (err) {
                res.status(500).send(err);
                return;
            }

            if (!admin) {
                return res.status(200).send({ status: "failed", data: {}, msg: "Email is not exist." });
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