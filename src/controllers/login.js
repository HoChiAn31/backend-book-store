const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (email && password) {
        User.findOne({
            email: email,
            password: password,
        })
            .then((user) => {
                if (user) {
                    res.json({
                        token: jwt.sign({ id_user: user._id, user: email }, 'secret_key'),
                    });
                } else {
                    res.status(401);
                    res.send('email or password is incorrect');
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }
};
