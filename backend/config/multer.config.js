const multer = require('multer');
var fileExtension = require('file-extension');

const Str = require('@supercharge/strings')

const random = Str.random()
    // 'zONHF73w_4M3cmv7GZpXG'
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../frontend/resource/images/uploads')
    },
    filename: (req, file, cb) => {
        cb(null, Str.random(20) + Date.now() + '.' + fileExtension(file.originalname))
    }
});

var upload = multer({
    storage: storage,
    limits: {
        fileSize: 10000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            //Error 
            cb(new Error('Please upload JPG and PNG images only!'))
        }
        //Success 
        cb(undefined, true)
    }
});

module.exports = upload;