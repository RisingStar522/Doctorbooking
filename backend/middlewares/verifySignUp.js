const db = require("../models");
const User = db.user;
const administratorsSchema = db.administratorsSchema;

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

const verifySignUp = {
    checkDuplicateUserEmail,
    checkDuplicateAdminEmail
};

module.exports = verifySignUp;