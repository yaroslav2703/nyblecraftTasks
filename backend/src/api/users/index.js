module.exports = (app) => {
    app.post('/users/get_one', require('./usersGetOne'));
};