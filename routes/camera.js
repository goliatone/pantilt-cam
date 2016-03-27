var express = require('express');
var router = express.Router();
var resolve = require('path').resolve;
var startCamera = resolve(__dirname + '/../bin/start_camera');
var stopCamera = resolve(__dirname + '/../bin/stop_camera');

/* GET home page. */
router.get('/start', function(req, res) {
    require('child_process').exec(startCamera, function(err, stdout, stderr){
        if(err) return res.send({status: false, message: stderr});
        res.send({status: true, message: stdout});
    });
});

router.get('/stop', function(req, res){
    require('child_process').exec(stopCamera, function(err, stdout, stderr){
        if(err) return res.send({status: false, message: stderr});
        res.send({status: true, message: stdout});
    });
});

module.exports = function(app, config){
    app.use('/camera', router);
};
