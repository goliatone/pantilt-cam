var express = require('express');
var router = express.Router();
var resolve = require('path').resolve;
var camera = require('../camera');

/* GET home page. */
router.get('/start', function(req, res) {
    camera.start(function(err, stdout, stderr){
        if(err) return res.send({status: false, message: stderr});
        res.send({status: true, message: stdout});
    });
});

router.get('/stop', function(req, res){
    camera.stop(function(err, stdout, stderr){
        if(err) return res.send({status: false, message: stderr});
        res.send({status: true, message: stdout});
    });
});

module.exports = function(app, config){
    app.use('/camera', router);
};
