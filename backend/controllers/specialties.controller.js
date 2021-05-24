const db = require("../models");
const SpeicaltiesSchema = db.speicalties;
const fs = require('fs')

exports.getSpecialtiesList = async(req, res) => {
    var query = {};

    query['_id'] = req.body._id;

    let total_count = 0;
    if (query['_id'] == "all") {
        total_count = await SpeicaltiesSchema.find({}).countDocuments();
        SpeicaltiesSchema.find({}).exec(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send({ items: result, total_count });
            }
        })
    } else {
        SpeicaltiesSchema.find(query).exec(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send({ items: result });
            }
        })
    }
}

exports.createNewSpeicalty = (req, res) => {
    const specialty = new SpeicaltiesSchema({
        specialty: req.body.specialties,
        image: req.file.filename
    });
    specialty.save((err) => {
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
};

exports.editSpecialty = (req, res) => {

    if (req.body.oldfile == "null") {
        const specialty = {
            specialty: req.body.specialties,
            image: req.file.filename
        };
        SpeicaltiesSchema.updateOne({ _id: req.body.itemid }, { $set: specialty },
            function(err, result) {
                if (err) {
                    res.send({
                        status: "failed",
                        data: {},
                        msg: `Something went wrong ${err}`,
                    });
                    return;
                }
                res.status(200).send({ status: "success", data: {}, msg: "Specialty modified." });
            }
        );
    } else {
        const specialty = {
            specialty: req.body.specialties,
            image: req.body.oldfile
        };
        SpeicaltiesSchema.updateOne({ _id: req.body.itemid }, { $set: specialty },
            function(err, result) {
                if (err) {
                    res.send({
                        status: "failed",
                        data: {},
                        msg: `Something went wrong ${err}`,
                    });
                    return;
                }
                res.status(200).send({ status: "success", data: {}, msg: "Specialty modified." });
            }
        );
    }



};

exports.deleteSpecialty = (req, res) => {
    SpeicaltiesSchema.deleteOne({ _id: req.body._id }, function(err, results) {
        if (err) {
            res.send({
                status: "failed",
                data: {},
                msg: `Something went wrong ${err}`,
            });
            return;
        } else {
            // fs.unlink("../frontend/resource/images/uploads/"+req.body.filename);
            fs.unlink("../frontend/resource/images/uploads/" + req.body.filename, (err) => {
                if (err) {
                    console.log("failed to delete local image:" + err);
                } else {
                    console.log('successfully deleted local image');
                }
            });
        }

        res.send({
            status: "success",
            data: {},
            msg: `Success deleted`,
        });
    });
}