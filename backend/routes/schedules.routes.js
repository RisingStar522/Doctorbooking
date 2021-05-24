const schedulesController = require("../controllers/schedules.controller");

module.exports = function(app, upload) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.post("/api/schedules/addSchedules", schedulesController.createNewSchedule);
    app.post("/api/schedules/editSchedules", schedulesController.editSchedule);
    app.post("/api/schedules/deleteSchedules", schedulesController.deleteSchedule);
    app.post("/api/schedules/getSchedules", schedulesController.getSchedule);
};