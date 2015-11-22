var express = require('express');
var lame = require('lame');
var Speaker = require('speaker');
var fs = require('fs');

var router = express.Router();

router.get('/test', function(req, res) {
     console.log("test");
     res.sendStatus(400);
});

module.exports = router;