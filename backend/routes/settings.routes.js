const settingsController = require("../controllers/settings.controller");
const { settings } = require("../models");

module.exports = function(app, upload) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post("/api/settings/createSettings", upload.single("uploadfile"), settingsController.createSettings);
    app.post("/api/settings/editSettings", upload.single("uploadfile"), settingsController.editSettings);
    app.post("/api/settings/getSettings", settingsController.getSettings);
};