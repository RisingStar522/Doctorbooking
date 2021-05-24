const db = require("../models");
const productsSchema = db.products;
const fs = require('fs')

exports.getProductList = async(req, res) => {
    var query = {};

    query['_id'] = req.body._id;

    let total_count = 0;
    if (query['_id'] == "all") {
        total_count = await productsSchema.find({}).countDocuments();
        productsSchema.find({}).exec(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send({ items: result, total_count });
            }
        })
    } else {
        productsSchema.find(query).exec(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send({ items: result });
            }
        })
    }
}

exports.addNewProduct = (req, res) => {
    const product = new productsSchema({
        productName: req.body.productname,
        productImage: req.file.filename,
        price: req.body.price,
        create_at: new Date()
    });
    product.save((err) => {
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

exports.editProducts = (req, res) => {

    if (req.body.oldfile == "null") {
        const products = {
            productName: req.body.productname,
            productImage: req.file.filename,
            price: req.body.price,
            create_at: new Date()
        };
        productsSchema.updateOne({ _id: req.body.itemid }, { $set: products },
            function(err, result) {
                if (err) {
                    res.send({
                        status: "failed",
                        data: {},
                        msg: `Something went wrong ${err}`,
                    });
                    return;
                }
                res.status(200).send({ status: "success", data: {}, msg: "Products detail chagned." });
            }
        );
    } else {
        const products = {
            productName: req.body.productname,
            productImage: req.body.oldfile,
            price: req.body.price,
            create_at: new Date()
        };
        productsSchema.updateOne({ _id: req.body.itemid }, { $set: products },
            function(err, result) {
                if (err) {
                    res.send({
                        status: "failed",
                        data: {},
                        msg: `Something went wrong ${err}`,
                    });
                    return;
                }
                res.status(200).send({ status: "success", data: {}, msg: "Products detail chagned." });
            }
        );
    }



};

exports.deleteProducts = (req, res) => {
    productsSchema.deleteOne({ _id: req.body._id }, function(err, results) {
        if (err) {
            res.send({
                status: "failed",
                data: {},
                msg: `Something went wrong ${err}`,
            });
            return;
        } else {
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