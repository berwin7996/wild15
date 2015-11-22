module.exports = function (app) {
    //app.use('/tone', require('./routes/instrument/guitar'));
    app.use('/tone', require('./routes/instrument/piano'));
    app.use('/tone', require('./routes/instrument/drum'));
    app.use('/tone', require('./routes/instrument/song'));
    app.use('/tone', require('./routes/instrument/triangle'));
};