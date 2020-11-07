module.exports = (app) => {
    app.post('/users/getOne', require('./usersGetOne'));
};