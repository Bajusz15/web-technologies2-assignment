const User = require('../models/user');

exports.get_user =  function (username) {
   return User.findOne({name: username}, function (err, user) {
        if (err) return err;
        return user
    })
};

exports.add_user = function (req, res, next) {
    exports.get_user(req.body.username)
        .exec(function (err, existingUser) {
            if (existingUser && existingUser.name === req.body.username){
                //do nothing, it exists
                res.json(false)
                return next();
            } else {
                let user = new User(
                    {
                        name: req.body.username,
                        password: req.body.password,
                    }
                );
                user.save(function (err, object) {
                    if (err) {
                        return next(err);
                    }
                    res.json({object})
                })
            }
        })

};