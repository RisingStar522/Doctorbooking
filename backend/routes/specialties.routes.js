const specialtiesController = require("../controllers/specialties.controller");

module.exports = function(app, upload) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/specialties/addSpecialties",  upload.single("uploadfile"), specialtiesController.createNewSpeicalty);
  app.post("/api/specialties/editSpecialties",  upload.single("uploadfile"), specialtiesController.editSpecialty);  
  app.post("/api/specialties/getSpecialtiesList", specialtiesController.getSpecialtiesList);
  app.post("/api/specialties/deleteSpecialties", specialtiesController.deleteSpecialty);
};