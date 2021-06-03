const db = require("../models");
const favouritesSchema = db.favourites;

exports.getFavourite_byPatients = async(req, res) => {
    var query = {};
    query['patient_id'] = req.body._id;

    favouritesSchema.find(query).exec(function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.status(200).send(result);
        }
    })

}

exports.createNewReview = (req, res) => {
    const review = new reviewSchema({
        patient: req.body.first_name,
        doctor: req.body.last_name,
        topaient: req.body.type,
        todoctor: req.body.email,
        topatientcomment: req.body.email,
        todoctorcomment: req.body.mobile,
        ratings: req.body.office_phone,
        content: req.body.content,
        review: req.body.avatar,
        created_at: new Date()
    });

    review.save((err, admin) => {
        if (err) {
            res.send({
                status: "failed",
                data: {},
                msg: `Something went wrong ${err}`,
            });
            return;
        }

        res.status(200).send({ status: "success", data: {}, msg: "" });
    });
};

exports.giveRecommend = (req, res) => {

    const review = {
        description: req.body.itemtype
    };
    reviewSchema.updateOne({ _id: req.body.itemId }, { $set: review },
        function(err, result) {
            if (err) {
                res.send({
                    status: "failed",
                    data: {},
                    msg: `Something went wrong ${err}`,
                });
                return;
            }
            res.status(200).send({ status: "success", data: {}, msg: "Successfuly Recommended." });
        }
    );
}

exports.deleteReview = (req, res) => {
    reviewSchema.deleteOne({ _id: req.body.selId }, function(err, results) {
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
            msg: `Success deleted`,
        });
    });
}