const db = require("../models");
const settingsSchema = db.settings;
const fs = require('fs');
const { query } = require("express");

exports.getSettings = async(req, res) => {

    let total_count = 0;
    total_count = await settingsSchema.find({}).countDocuments();
    settingsSchema.find({}).exec(function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.status(200).send({ "itemid": result[0]["_id"], "sitetitle": result[0]["sitetitle"], "logoimage": result[0]["logo"], "favicon": result[0]["favicon"] });
        }
    })
}

exports.createSettings = (req, res) => {
    var query = {};
    query['sitetitle'] = req.body.title;
    if (req.body.tapid == "1") {
        const settings = new settingsSchema({
            sitetitle: req.body.title
        });
        settings.save((err) => {
            if (err) {
                res.send({
                    status: "failed",
                    data: {},
                    msg: `Something went wrong ${err}`,
                });
                return;
            } else {
                settingsSchema.find({}).exec(function(err, result) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.status(200).send({ status: "success", msg: `Successfully added`, itemid: result[0]["_id"] });
                    }
                })
            }
        });
    } else if (req.body.tapid == "2") {
        const settings = new settingsSchema({
            logo: req.file.filename
        });
        settings.save((err) => {
            if (err) {
                res.send({
                    status: "failed",
                    data: {},
                    msg: `Something went wrong ${err}`,
                });
                return;
            }
            res.status(200).send({ status: "success", msg: `Successfully added`, });
        });
    } else if (req.body.tapid == "3") {
        const settings = new settingsSchema({
            favicon: req.file.filename
        });
        settings.save((err) => {
            if (err) {
                res.send({
                    status: "failed",
                    data: {},
                    msg: `Something went wrong ${err}`,
                });
                return;
            }
            res.status(200).send({ status: "success", msg: `Successfully added`, });
        });
    }
};

exports.editSettings = (req, res) => {
    if (req.body.tapid == "1") {
        const settings = {
            sitetitle: req.body.title
        };
        settingsSchema.updateOne({ sitetitle: req.body.title }, { $set: settings },
            function(err, result) {
                if (err) {
                    res.send({
                        status: "failed",
                        data: {},
                        msg: `Something went wrong ${err}`,
                    });
                    return;
                }
                res.status(200).send({ status: "success", data: {}, msg: "Website name changed." });
            }
        );
    } else if (req.body.tapid == "2") {
        const settings = {
            logo: req.file.filename
        };
        settingsSchema.updateOne({ _id: req.body.itemid }, { $set: settings },
            function(err, result) {
                if (err) {
                    res.send({
                        status: "failed",
                        data: {},
                        msg: `Something went wrong ${err}`,
                    });
                    return;
                }
                res.status(200).send({ status: "success", data: {}, msg: "Logo image changed." });
            }
        );
    } else if (req.body.tapid == "3") {
        const settings = {
            favicon: req.file.filename
        };
        settingsSchema.updateOne({ _id: req.body.itemid }, { $set: settings },
            function(err, result) {
                if (err) {
                    res.send({
                        status: "failed",
                        data: {},
                        msg: `Something went wrong ${err}`,
                    });
                    return;
                }
                res.status(200).send({ status: "success", data: {}, msg: "Favicon file changed." });
            }
        );
    }
};