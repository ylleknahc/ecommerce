const controller = require('./controller');

module.exports = app => {
    app.post('/api/users', controller.register);
    // app.post('/api/logins', controller.login);
}