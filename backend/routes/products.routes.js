const productsController = require("../controllers/products.controller");

module.exports = function(app, upload) {
    app.use(function(req, res, next) {
        // res.header(
        //     "Access-Control-Allow-Headers",
        //     "x-access-token, Origin, Content-Type, Accept"

        // );
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.post("/api/products/addNewProduct", upload.single("uploadfile"), productsController.addNewProduct);
    app.post("/api/products/editProducts", upload.single("uploadfile"), productsController.editProducts);
    app.post("/api/products/getProductList", productsController.getProductList);
    app.post("/api/products/deleteProducts", productsController.deleteProducts);
};