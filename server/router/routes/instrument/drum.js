var express = require('express');
var lame = require('lame');
var Speaker = require('speaker');
var fs = require('fs');

var router = express.Router();

router.get('/test', function(req, res) {
     console.log("test");
     res.sendStatus(400);
});

router.get('/1', function(req, res) {
    var file = fs.createReadStream('./tones/drum/bass_drum_light_strike_1.mp3');
    var decoder = lame.Decoder();
    var speaker = new Speaker();
    speaker.on('error', function(err) {
        console.log(err);
        res.sendStatus(400);
    });
    file.pipe(decoder).pipe(speaker);
    res.sendStatus(200);
});

router.get('/2', function(req, res) {
    var file = fs.createReadStream('./tones/drum/bass_drum_light_strike_2.mp3');
    var decoder = lame.Decoder();
    var speaker = new Speaker();
    speaker.on('error', function(err) {
        console.log(err);
        res.sendStatus(400);
    });
    file.pipe(decoder).pipe(speaker);
    res.sendStatus(200);
});

router.get('/3', function(req, res) {
    var file = fs.createReadStream('./tones/drum/bass_drum_light_strike_3.mp3');
    var decoder = lame.Decoder();
    var speaker = new Speaker();
    speaker.on('error', function(err) {
        console.log(err);
        res.sendStatus(400);
    });
    file.pipe(decoder).pipe(speaker);
    res.sendStatus(200);
});

router.get('/4', function(req, res) {
    var file = fs.createReadStream('./tones/drum/bass_drum_heavy_strike_1.mp3');
    var decoder = lame.Decoder();
    var speaker = new Speaker();
    speaker.on('error', function(err) {
        console.log(err);
        res.sendStatus(400);
    });
    file.pipe(decoder).pipe(speaker);
    res.sendStatus(200);
});

router.get('/5', function(req, res) {
    var file = fs.createReadStream('./tones/drum/bass_drum_deep_strike_1.mp3');
    var decoder = lame.Decoder();
    var speaker = new Speaker();
    speaker.on('error', function(err) {
        console.log(err);
        res.sendStatus(400);
    });
    file.pipe(decoder).pipe(speaker);
    res.sendStatus(200);
});

router.get('/6', function(req, res) {
    var file = fs.createReadStream('./tones/drum/snare_drum_strike_1.mp3');
    var decoder = lame.Decoder();
    var speaker = new Speaker();
    speaker.on('error', function(err) {
        console.log(err);
        res.sendStatus(400);
    });
    file.pipe(decoder).pipe(speaker);
    res.sendStatus(200);
});

router.get('/7', function(req, res) {
    var file = fs.createReadStream('./tones/drum/snare_drum_strike_2.mp3');
    var decoder = lame.Decoder();
    var speaker = new Speaker();
    speaker.on('error', function(err) {
        console.log(err);
        res.sendStatus(400);
    });
    file.pipe(decoder).pipe(speaker);
    res.sendStatus(200);
});

router.get('/8', function(req, res) {
    var file = fs.createReadStream('./tones/drum/tambourine_strike_1.mp3');
    var decoder = lame.Decoder();
    var speaker = new Speaker();
    speaker.on('error', function(err) {
        console.log(err);
        res.sendStatus(400);
    });
    file.pipe(decoder).pipe(speaker);
    res.sendStatus(200);
});

router.get('/9', function(req, res) {
    var file = fs.createReadStream('./tones/drum/tambourine_strike_2.mp3');
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