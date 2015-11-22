var express = require('express');
var router = express.Router();

router.get('/test', function(req, res) {
     console.log("tst");
     res.sendStatus(400);
});

module.exports = router;