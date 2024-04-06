const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (username && password) {
        User.findOne({
            username: username,
            password: password,
        })
            .then((user) => {
                if (user) {
                    res.json({
                        token: jwt.sign({ id_user: user._id, user: username }, 'secret_key'),
                    });
                } else {
                    res.status(401);
                    res.send('username or password is incorrect');
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }
};
