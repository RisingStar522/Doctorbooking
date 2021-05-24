const { verifySignUp } = require("../middlewares");
const userController = require("../controllers/user.controller");

module.exports = function(app, upload) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.post("/api/user/getAdminList", userController.getAdminList);

    app.post("/api/user/getAdmin", userController.getAdmin);

    app.post("/api/user/getAdminProfile", userController.getAdminProfile);

    app.post("/api/user/editAdminAvatar", upload.single("uploadfile"), userController.editAdminAvatar);

    app.post("/api/user/editUserAvatar", upload.single("uploadfile"), userController.editUserAvatar);

    app.post("/api/user/editUserProfile", upload.single("uploadfile"), userController.editUserProfile);

    app.post("/api/user/getAdminListAll", userController.getAdminListAll);

    app.post("/api/user/getUserListAll", userController.getUserListAll);

    app.post("/api/user/getUserListP", userController.getUserListP);

    app.post("/api/user/getUserListProfile", userController.getUserListProfile);

    app.post("/api/user/getUserinfo", userController.getUserinfo);

    app.post("/api/user/changeUserStatus", userController.changeUserStatus);

    app.post("/api/user/changeType", userController.changeType);

    app.post("/api/user/changeComment", userController.changeComment);

    app.post("/api/user/createNewadmin", [
            verifySignUp.checkDuplicateAdminEmail,
        ],
        userController.createNewadmin);

    app.post("/api/user/saveadmin", userController.saveadmin);

    app.post("/api/user/saveUser", userController.saveUser);

    app.post("/api/user/saveMember", userController.saveMember);

    app.post("/api/user/deleteadmin", userController.deleteadmin);

    app.post("/api/user/changePwd", userController.changePwd);

};