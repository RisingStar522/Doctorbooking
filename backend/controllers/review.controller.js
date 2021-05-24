const db = require("../models");
const reviewSchema = db.review;

exports.getReviewListAll = async(req, res) => {
    var query = {};

    query['role'] = req.body.role;

    let total_count = 0;


    if (req.body.role == "all") {
        total_count = await reviewSchema.find({}).countDocuments();
        reviewSchema.find({}).exec(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send({ items: result, total_count });
            }
        })
    } else {
        total_count = await reviewSchema.find(query).countDocuments();
        reviewSchema.find(query).exec(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send({ items: result, total_count });
            }
        })
    }
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