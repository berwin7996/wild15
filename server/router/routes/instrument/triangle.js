var express = require('express');
var lame = require('lame');
var Speaker = require('speaker');
var fs = require('fs');
var path = require('path');

var router = express.Router();

router.get('/test', function(req, res) {
     console.log("test");
     res.sendStatus(400);
});

router.get('/1', function(req, res) {
    var file = fs.createReadStream('./tones/triangle/triangle_long_strike.mp3');
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