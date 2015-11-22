module.exports = function (app) {
    //app.use('/tone', require('./routes/instrument/guitar'));

    var express = require('express');
    var router = express.Router(app);
    // var router = require('./router')(app);


    app.use('/instrument/piano', require('./routes/instrument/piano'));
    app.use('/instrument/drum', require('./routes/instrument/drum'));
    app.use('/instrument/song', require('./routes/instrument/song'));
    app.use('/instrument/triangle', require('./routes/instrument/triangle'));


    router.get('/', function (req, res){
        res.redirect('/dashboard.html');
    });

    router.post('/piano/submit', function (req, res) {
        io.emit('piano', req.body);
        res.status(200).redirect('/piano');
    });

    router.post('/drum/submit', function (req, res) {
        io.emit('drum', req.body);
        res.status(200).redirect('/client');
    });

    router.post('/triangle/submit', function (req, res) {
        console.log('triangle');
        io.emit('triangle', req.body);
        res.status(200).redirect('/client');
    });

    return router;
};