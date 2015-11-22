var express = require('express');
var router = express.Router();

router.get('/test', function(req, res) {
     console.log("test");
     res.sendStatus(400);
});

module.exports = router;