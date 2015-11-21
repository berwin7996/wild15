var express = require('express');
var router = express.Router();

// GET localhost:9000/tone/test
router.get('/test', function(req, res) {
     console.log("test");
     res.sendStatus(400);
});

module.exports = router;