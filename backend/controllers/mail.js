var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    port: 465,
    auth: {
        user: 'wanghuajinksh@gmail.com',
        pass: 'gtpzwarwxndzgzyl'
    },
    tls: {
        rejectUnauthorized: false
    }
});

transporter.sendEMail = function(mailOptions) {
    return new Promise(function(resolve, reject) {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                reject(error);
            } else {
                resolve("The message was sent!");
            }
        });
    });
}

module.exports = transporter;