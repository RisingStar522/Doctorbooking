const reviewController = require("../controllers/review.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/review/getReviewListAll", reviewController.getReviewListAll);

    app.post("/api/review/giveRecommend", reviewController.giveRecommend);

    app.post("/api/review/createNewReview", reviewController.createNewReview);

    app.post("/api/review/deleteReview", reviewController.deleteReview);
};