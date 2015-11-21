module.exports = function (app) {
    app.use('/tone', require('./routes/tone'));
};