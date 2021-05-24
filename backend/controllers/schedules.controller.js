const db = require("../models");
const scheduleSchema = db.schedule;
const fs = require('fs');
const { schema } = require("../models/user.model");

exports.getSchedule = async(req, res) => {
    var query = {};
    query['user'] = req.body.email;

    let total_count = 0;
    if (query['user'] == "all") {
        total_count = await scheduleSchema.find({}).countDocuments();
        scheduleSchema.find({}).exec(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send({ items: result, total_count });
            }
        })
    } else {
        scheduleSchema.find(query).exec(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send({ items: result, status: "success" });
            }
        })
    }
}

exports.createNewSchedule = (req, res) => {
    var newschema = {};
    days = req.body.days;
    newschema["user"] = req.body.email;
    newschema[days] = req.body.hourinfo;

    scheduleSchema.find({ user: req.body.email }).exec(function(err, result) {
        if (err) {
            res.send(err);
        } else {

            if (result.length > 0) {
                scheduleSchema.updateOne({ user: req.body.email }, { $set: newschema },
                    function(err, result) {
                        if (err) {
                            res.send({
                                status: "failed",
                                data: {},
                                msg: `Something went wrong ${err}`,
                            });
                            return;
                        }
                        res.status(200).send({ status: "success", data: { "result": result }, msg: "Successfully modified." });
                    }
                );
            } else {
                const schedule = new scheduleSchema(newschema);
                schedule.save((err) => {
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
        }
    })




};

exports.editSchedule = (req, res) => {
    const schedule = {

    };
    scheduleSchema.updateOne({ _id: req.body.itemid }, { $set: schedule },
        function(err, result) {
            if (err) {
                res.send({
                    status: "failed",
                    data: {},
                    msg: `Something went wrong ${err}`,
                });
                return;
            }
            res.status(200).send({ status: "success", data: {}, msg: "Successfully modified." });
        }
    );
};

exports.deleteSchedule = (req, res) => {
    scheduleSchema.deleteOne({ _id: req.body.email }, function(err, results) {
        if (err) {
            res.send({
                status: "failed",
                data: {},
                msg: `Something went wrong ${err}`,
            });
            return;
        }
        res.send({
            status: "success",
            data: {},
            msg: `Successfully deleted`,
        });
    });
}