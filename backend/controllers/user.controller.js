const db = require("../models");
const UserSchema = db.user;
const administratorsSchema = db.administratorsSchema;
const mail = require('./mail');
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.getAdminList = async(req, res) => {
    var query = {};
    query['role'] = 'Admin';

    let total_count = await administratorsSchema.find(query).countDocuments();

    administratorsSchema.find(query).limit(req.body.limit).skip(req.body.offset).exec(function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.status(200).send({ items: result, total_count });
        }
    })
}

exports.getAdmin = async(req, res) => {
    var query = {};
    query['email'] = req.body.email;
    administratorsSchema.find(query).exec(function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.status(200).send({ items: result });
        }
    })
}

exports.getAdminProfile = async(req, res) => {
    var query = {};
    query['_id'] = req.body.itemid;
    administratorsSchema.find(query).exec(function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.status(200).send({ items: result });
        }
    })
}

exports.getUserList = async(req, res) => {
    var query = {};
    query['role'] = 'doctor';

    let total_count = await UserSchema.find(query).countDocuments();

    UserSchema.find(query).limit(req.body.limit).skip(req.body.offset).exec(function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.status(200).send({ items: result, total_count });
        }
    })
}

exports.getUserListP = async(req, res) => {
    var query = {};
    query['role'] = 'Patients';

    let total_count = await UserSchema.find(query).countDocuments();

    UserSchema.find(query).limit(req.body.limit).skip(req.body.offset).exec(function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.status(200).send( result);
        }
    })
}

exports.getUserListProfile = async(req, res) => {
    var query = {};
    query['_id'] = req.body.itemid;

    let total_count = await UserSchema.find(query).countDocuments();

    UserSchema.find(query).limit(req.body.limit).skip(req.body.offset).exec(function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.status(200).send({ items: result, total_count });
        }
    })
}

exports.getUserinfo = async(req, res) => {
    var query = {};
    query['email'] = req.body.email;

    let total_count = await UserSchema.find(query).countDocuments();

    UserSchema.find(query).limit(req.body.limit).skip(req.body.offset).exec(function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.status(200).send({ items: result, total_count });
        }
    })
}

exports.getAdminListAll = async(req, res) => {
    var query = {};

    query['role'] = req.body.role;

    // console.log();
    let total_count = await administratorsSchema.find(query).countDocuments();




    administratorsSchema.find(query).exec(function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.status(200).send({ items: result, total_count });
        }
    })
}

exports.getUserListAll = async(req, res) => {
    var query = {};

    query['role'] = req.body.role;
    // console.log();

    let total_count = 0;

    if (req.body.role == "all") {
        total_count = await UserSchema.find({}).countDocuments();

        UserSchema.find({}).exec(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send({ items: result, total_count });
            }
        })
    } else {
        total_count = await UserSchema.find(query).countDocuments();
        UserSchema.find(query).exec(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.status(200).send({ items: result, total_count });
            }
        })
    }
}

exports.changeType = async(req, res) => {

    administratorsSchema.updateOne({ _id: req.body.selId }, { $set: { type: req.body.type } },
        function(er, result) {
            console.log(er, result);
        }
    );

    res.status(200).send({ status: 'success' });
}

exports.changeUserStatus = async(req, res) => {

    UserSchema.updateOne({ _id: req.body._id }, { $set: { status: req.body.status } },
        function(er, result) {
            console.log(er, result);
        }
    );

    res.status(200).send({ status: 'success' });
}

exports.changeComment = async(req, res) => {

    administratorsSchema.updateOne({ _id: req.body.selId }, { $set: { comment: req.body.comment } },
        function(er, result) {
            console.log(er, result);
        }
    );

    res.status(200).send({ status: 'success' });
}

exports.changeUserComment = async(req, res) => {

    UserSchema.updateOne({ _id: req.body.selId }, { $set: { comment: req.body.comment } },
        function(er, result) {
            console.log(er, result);
        }
    );

    res.status(200).send({ status: 'success' });
}


exports.createNewadmin = (req, res) => {
    const password = Math.random().toString(36).slice(-8);

    const admin = new administratorsSchema({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        type: req.body.type,
        email: req.body.email,
        password: bcrypt.hashSync(password, 8),
        mobile: req.body.mobile,
        office_phone: req.body.office_phone,
        content: req.body.content,
        avatar: req.body.avatar,
        address: req.body.address,
        role: 'Team',
        status: '0',
        created_at: new Date()
    });

    admin.save((err, admin) => {
        if (err) {
            res.send({
                status: "failed",
                data: {},
                msg: `Something went wrong ${err}`,
            });
            return;
        }

        let htmlContent = `
          <h3>Invite to Team admin of Nirbhai.com</h3>
          <p>You can login with follow info.</p>
          <br/>
          <p>Contact Email: ${req.body.email}</p>
          <p>Contact Phone: ${password}</p>
          `;

        let mailOptions = {
            from: "wanghuajinksh@gmail.com",
            to: [],
            bcc: [req.body.email],
            subject: "Request From Nirbhai server",
            text: "",
            html: htmlContent
        }

        mail.sendMail(mailOptions)
            .then(function(email) {
                res.status(200).json({ success: true, msg: 'Mail sent' });
            }).catch(function(exception) {
                res.status(200).json({ success: false, msg: exception });
            });

        res.status(200).send({ status: "success", data: {}, msg: "Sent Email to " + req.body.email });
    });
};

exports.createNewUser = (req, res) => {
    const password = Math.random().toString(36).slice(-8);

    const user = new UserSchema({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        type: req.body.type,
        email: req.body.email,
        password: bcrypt.hashSync(password, 8),
        mobile: req.body.mobile,
        office_phone: req.body.office_phone,
        content: req.body.content,
        avatar: req.body.avatar,
        address: req.body.address,
        review: '0',
        role: '',
        status: 'on',
        created_at: new Date()
    });

    user.save((err, admin) => {
        if (err) {
            res.send({
                status: "failed",
                data: {},
                msg: `Something went wrong ${err}`,
            });
            return;
        }

        let htmlContent = `
          <h3>Invite to Team admin of Nirbhai.com</h3>
          <p>You can login with follow info.</p>
          <br/>
          <p>Contact Email: ${req.body.email}</p>
          <p>Contact Phone: ${password}</p>
          `;

        let mailOptions = {
            from: "wanghuajinksh@gmail.com",
            to: [],
            bcc: [req.body.email],
            subject: "Request From Nirbhai server",
            text: "",
            html: htmlContent
        }

        mail.sendMail(mailOptions)
            .then(function(email) {
                res.status(200).json({ success: true, msg: 'Mail sent' });
            }).catch(function(exception) {
                res.status(200).json({ success: false, msg: exception });
            });

        res.status(200).send({ status: "success", data: {}, msg: "Sent Email to " + req.body.email });
    });
};

exports.saveadmin = (req, res) => {

    const admin = {
        firstname: req.body.first_name,
        lastname: req.body.last_name,
        email: req.body.email,
        phone: req.body.mobile,
        birth: req.body.birth,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        zipcode: req.body.zipcode,
        update_at: new Date()
    };

    administratorsSchema.updateOne({ _id: req.body._id }, { $set: admin },
        function(err, result) {
            if (err) {
                res.send({
                    status: "failed",
                    data: {},
                    msg: `Something went wrong ${err}`,
                });
                return;
            }

            res.status(200).send({ status: "success", data: {}, msg: "Save admin Data" });
        }
    );
};

exports.saveUser = (req, res) => {

    const user = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        type: req.body.type,
        email: req.body.email,
        mobile: req.body.mobile,
        office_phone: req.body.office_phone,
        content: req.body.content,
        avatar: req.body.avatar,
        address: req.body.address,
        role: 'Team'
    };

    UserSchema.updateOne({ _id: req.body.selId }, { $set: user },
        function(err, result) {
            if (err) {
                res.send({
                    status: "failed",
                    data: {},
                    msg: `Something went wrong ${err}`,
                });
                return;
            }

            res.status(200).send({ status: "success", data: {}, msg: "Save admin Data" });
        }
    );
};

exports.saveMember = (req, res) => {

    const user = {
        firstname: req.body.first_name,
        lastname: req.body.last_name,
        email: req.body.email,
        phone: req.body.mobile,
        birth: req.body.birth,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        zipcode: req.body.zipcode,
        update_at: new Date()
    };


    UserSchema.updateOne({ _id: req.body._id }, { $set: user },
        function(err, result) {
            if (err) {
                res.send({
                    status: "failed",
                    data: {},
                    msg: `Something went wrong ${err}`,
                });
                return;
            }

            res.status(200).send({ status: "success", data: {}, msg: "Save User Data" });
        }
    );
};


exports.deleteadmin = (req, res) => {
    administratorsSchema.deleteOne({ _id: req.body.selId }, function(err, results) {
        if (err) {
            res.send({
                status: "failed",
                data: {},
                msg: `Something went wrong ${err}`,
            });
            return;
        }

        res.send({
            status: "success",
            data: {},
            msg: `Success deleted`,
        });
    });
}

exports.deleteUser = (req, res) => {
    UserSchema.deleteOne({ _id: req.body.selId }, function(err, results) {
        if (err) {
            res.send({
                status: "failed",
                data: {},
                msg: `Something went wrong ${err}`,
            });
            return;
        }

        res.send({
            status: "success",
            data: {},
            msg: `Success deleted`,
        });
    });
}

exports.changePwd = (req, res) => {
    oldpassword = req.body.oldpassword;
    newpassword = req.body.newpassword;
    const admin = {
        password: bcrypt.hashSync(newpassword, 8)
    };

    administratorsSchema.find({ _id: req.body.itemid }).exec(function(err, result) {
        if (err) {
            res.send(err);
        } else {
            var passwordIsValid = bcrypt.compareSync(
                oldpassword,
                result[0].password
            );

            if (!passwordIsValid) {
                return res.status(200).send({ status: "failed", data: {}, msg: "Old Password does not match!" });
            } else {
                administratorsSchema.updateOne({ _id: req.body.itemid }, { $set: admin },
                    function(err, result) {
                        if (err) {
                            res.send({
                                status: "failed",
                                data: {},
                                msg: `Something went wrong ${err}`,
                            });
                            return;
                        }

                        let htmlContent = `
                            Admin Password changed
                            `;

                        let mailOptions = {
                            from: "wanghuajinksh@gmail.com",
                            to: [],
                            bcc: "dyadkovdevelop@gmail.com",
                            subject: "Request From Nirbhai server",
                            text: "",
                            html: htmlContent
                        }

                        // mail.sendMail(mailOptions)
                        //     .then(function(email) {
                        //         res.status(200).json({ success: true, msg: 'Mail sent' });
                        //     }).catch(function(exception) {
                        //         res.status(200).json({ success: false, msg: exception });
                        //     });

                        res.status(200).send({ status: "success", data: {}, msg: "Successfully changed" });
                    }
                );
            }
        }
    })
};

exports.changeUserPwd = (req, res) => {
    oldpassword = req.body.oldpassword;
    newpassword = req.body.newpassword;
    const user = {
        password: bcrypt.hashSync(newpassword, 8)
    };

    UserSchema.find({ _id: req.body.itemid }).exec(function(err, result) {
        if (err) {
            res.send(err);
        } else {
            var passwordIsValid = bcrypt.compareSync(
                oldpassword,
                result[0].password
            );

            if (!passwordIsValid) {
                return res.status(200).send({ status: "failed", data: {}, msg: "Old Password does not match!" });
            } else {
                UserSchema.updateOne({ _id: req.body.itemid }, { $set: user },
                    function(err, result) {
                        if (err) {
                            res.send({
                                status: "failed",
                                data: {},
                                msg: `Something went wrong ${err}`,
                            });
                            return;
                        }

                        let htmlContent = `
                            User Password changed
                            `;

                        let mailOptions = {
                            from: "wanghuajinksh@gmail.com",
                            to: [],
                            bcc: "dyadkovdevelop@gmail.com",
                            subject: "Request From Nirbhai server",
                            text: "",
                            html: htmlContent
                        }

                        // mail.sendMail(mailOptions)
                        //     .then(function(email) {
                        //         res.status(200).json({ success: true, msg: 'Mail sent' });
                        //     }).catch(function(exception) {
                        //         res.status(200).json({ success: false, msg: exception });
                        //     });

                        res.status(200).send({ status: "success", data: {}, msg: "Successfully changed" });
                    }
                );
            }
        }
    })
};


exports.editUserAvatar = (req, res) => {
    if (req.body.ischange == "yes") {
        const user = {
            description: req.body.description,
            avatar: req.file.filename
        };
        UserSchema.updateOne({ _id: req.body.itemid }, { $set: user },
            function(err, result) {
                if (err) {
                    res.send({
                        status: "failed",
                        data: {},
                        msg: `Something went wrong ${err}`,
                    });
                    return;
                }
                res.status(200).send({ status: "success", data: {}, msg: "Successfuly changed." });
            }
        );
    } else {
        const user = {
            description: req.body.description,
            avatar: req.body.oldfile
        };
        UserSchema.updateOne({ _id: req.body.itemid }, { $set: user },
            function(err, result) {
                if (err) {
                    res.send({
                        status: "failed",
                        data: {},
                        msg: `Something went wrong ${err}`,
                    });
                    return;
                }
                res.status(200).send({ status: "success", data: {}, msg: "Successfuly changed." });
            }
        );
    }
}


exports.editAdminAvatar = (req, res) => {
    if (req.body.ischange == "yes") {
        const admin = {
            description: req.body.description,
            avatar: req.file.filename
        };
        administratorsSchema.updateOne({ _id: req.body.itemid }, { $set: admin },
            function(err, result) {
                if (err) {
                    res.send({
                        status: "failed",
                        data: {},
                        msg: `Something went wrong ${err}`,
                    });
                    return;
                }
                res.status(200).send({ status: "success", data: {}, msg: "Successfuly changed." });
            }
        );
    } else {
        const admin = {
            description: req.body.description,
            avatar: req.body.oldfile
        };
        administratorsSchema.updateOne({ _id: req.body.itemid }, { $set: admin },
            function(err, result) {
                if (err) {
                    res.send({
                        status: "failed",
                        data: {},
                        msg: `Something went wrong ${err}`,
                    });
                    return;
                }
                res.status(200).send({ status: "success", data: {}, msg: "Successfuly changed." });
            }
        );
    }
}

exports.editUserProfile = (req, res) => {
    if (req.body.oldfile != "") {
        const user = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            birth: req.body.birth,
            description: req.body.description,
            clinicname: req.body.clinicname,
            clinicaddress: req.body.clinicaddress,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            zipcode: req.body.zipcode,
            rating_option: req.body.rating_option,
            custom_rating_count: req.body.custom_rating_count,
            services: req.body.services,
            specialties: req.body.specialties,
            avatar: req.body.oldfile,
            educations: req.body.educations,
            experiences: req.body.experiences,
            awards: req.body.awards,
            memberships: req.body.memberships,
            registrations: req.body.registrations,
            itemid: req.body.itemid,
            gender: req.body.gender,
            blood: req.body.blood
        };
        UserSchema.updateOne({ _id: req.body.itemid }, { $set: user },
            function(err, result) {
                if (err) {
                    res.send({
                        status: "failed",
                        data: {},
                        msg: `Something went wrong ${err}`,
                    });
                    return;
                }
                res.status(200).send({ status: "success", data: {}, msg: "Successfuly changed." });
            }
        );
    } else {
        const user = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            phone: req.body.phone,
            birth: req.body.birth,
            description: req.body.description,
            clinicname: req.body.clinicname,
            clinicaddress: req.body.clinicaddress,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            zipcode: req.body.zipcode,
            rating_option: req.body.rating_option,
            custom_rating_count: req.body.custom_rating_count,
            services: req.body.services,
            specialties: req.body.specialties,
            avatar: req.file.filename,
            educations: req.body.educations,
            experiences: req.body.experiences,
            awards: req.body.awards,
            memberships: req.body.memberships,
            registrations: req.body.registrations,
            itemid: req.body.itemid,
            gender: req.body.gender
        };
        UserSchema.updateOne({ _id: req.body.itemid }, { $set: user },
            function(err, result) {
                if (err) {
                    res.send({
                        status: "failed",
                        data: {},
                        msg: `Something went wrong ${err}`,
                    });
                    return;
                }
                res.status(200).send({ status: "success", data: {}, msg: "Successfuly changed." });
            }
        );
    }
}