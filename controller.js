const models = require('./models');
const _ = require('lodash');

module.exports = {
    register: async (req, res) => {
        const { error } = models.validateUser(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }
        let user = await models.User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).send('User already registed');
        }

        // user = new models.User({
        //     name: req.body.name,
        //     email: req.body.email,
        //     password: req.body.password
        // });

        user = new models.User(_.pick(req.body, ['name', 'email', 'password']));

        await user.save();

        _.pick(user, ['_id', 'name', 'email'])

        res.send( _.pick(user, ['_id', 'name', 'email']));
    }
}