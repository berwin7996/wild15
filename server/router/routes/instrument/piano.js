var express = require('express');
var lame = require('lame');
var Speaker = require('speaker');
var fs = require('fs');

var router = express.Router();

router.get('/test', function(req, res) {
     console.log("tst");
     res.sendStatus(400);
});

/*
* Plays the A note.
*/
router.get('/1', function(req, res) {
    var file = fs.createReadStream('./tones/piano/A.mp3');
    var decoder = lame.Decoder();
    var speaker = new Speaker();
    speaker.on('error', function(err) {
        console.log(err);
        res.sendStatus(400);
    });
    file.pipe(decoder).pipe(speaker);
    res.sendStatus(200);
});

/*
* Plays the B note.
*/
router.get('/2', function(req, res) {
    var file = fs.createReadStream('./tones/piano/B.mp3');
    var decoder = lame.Decoder();
    var speaker = new Speaker();
    speaker.on('error', function(err) {
        console.log(err);
        res.sendStatus(400);
    });
    file.pipe(decoder).pipe(speaker);
    res.sendStatus(200);
});

/*
* Plays the C note.
*/
router.get('/3', function(req, res) {
    var file = fs.createReadStream('./tones/piano/C.mp3');
    var decoder = lame.Decoder();
    var speaker = new Speaker();
    speaker.on('error', function(err) {
        console.log(err);
        res.sendStatus(400);
    });
    file.pipe(decoder).pipe(speaker);
    res.sendStatus(200);
});

/*
* Plays the D note.
*/
router.get('/4', function(req, res) {
    var file = fs.createReadStream('./tones/piano/D.mp3');
    var decoder = lame.Decoder();
    var speaker = new Speaker();
    speaker.on('error', function(err) {
        console.log(err);
        res.sendStatus(400);
    });
    file.pipe(decoder).pipe(speaker);
    res.sendStatus(200);
});

/*
* Plays the E note.
*/
router.get('/5', function(req, res) {
    var file = fs.createReadStream('./tones/piano/E.mp3');
    var decoder = lame.Decoder();
    var speaker = new Speaker();
    speaker.on('error', function(err) {
        console.log(err);
        res.sendStatus(400);
    });
    file.pipe(decoder).pipe(speaker);
    res.sendStatus(200);
});

/*
* Plays the F note.
*/
router.get('/6', function(req, res) {
    var file = fs.createReadStream('./tones/piano/F.mp3');
    var decoder = lame.Decoder();
    var speaker = new Speaker();
    speaker.on('error', function(err) {
        console.log(err);
        res.sendStatus(400);
    });
    file.pipe(decoder).pipe(speaker);
    res.sendStatus(200);
});

/*
* Plays the G note.
*/
router.get('/7', function(req, res) {
    var file = fs.createReadStream('./tones/piano/G.mp3');
    var decoder = lame.Decoder();
    var speaker = new Speaker();
    speaker.on('error', function(err) {
        console.log(err);
        res.sendStatus(400);
    });
    file.pipe(decoder).pipe(speaker);
    res.sendStatus(200);
});

module.exports = router;