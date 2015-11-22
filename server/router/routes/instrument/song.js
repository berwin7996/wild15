var express = require('express');
var lame = require('lame');
var Speaker = require('speaker');
var fs = require('fs');
var say = require('say');

var router = express.Router();

router.get('/test', function(req, res) {
     console.log("test");
     res.sendStatus(400);
});

/*
* For the typed english words, grabs the text from the "text" attribute
*/
router.post('/say', function(req, res) {
    var text = req.body.text;
    // console.log(text);
    say.speak(null, text);    
    res.sendStatus(200);
});

/*
* For voice recorded words
*/
router.post('/usay', function(req, res) {
    var text = req.body.text;
    // console.log(text);
    say.speak(null, text);    
    res.sendStatus(200);
});

module.exports = router;