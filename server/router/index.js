module.exports = function (app) {
    //app.use('/tone', require('./routes/instrument/guitar'));
    app.use('/instrument/piano', require('./routes/instrument/piano'));
    app.use('/instrument/drum', require('./routes/instrument/drum'));
    app.use('/instrument/song', require('./routes/instrument/song'));
    app.use('/instrument/triangle', require('./routes/instrument/triangle'));
};