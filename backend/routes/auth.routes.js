const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/auth/signup", [verifySignUp.checkDuplicateUserEmail, ], controller.signup);

    app.post("/api/auth/signin", controller.signin);

    app.post("/api/auth/signin_patient", controller.signin_patient);

    app.post("/api/auth/signup_admin", [verifySignUp.checkDuplicateAdminEmail, ], controller.signup_admin);

    app.post("/api/auth/signin_admin", controller.signin_admin);
};