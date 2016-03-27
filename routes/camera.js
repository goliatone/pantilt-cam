var express = require('express');
var router = express.Router();
var resolve = require('path').resolve;
var script = resolve(__dirname + '/../bin/start_camera');

/* GET home page. */
router.get('/start', function(req, res) {
    start(script, function(err, stdout, stderr){
        if(err) return res.send({status: false, message: stderr});
        res.send({status: true, message: stdout});
    });
});

module.exports = function(app, config){
    app.use('/camera', router);
};

function start(script){
    require('child_process').exec(script,
      function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
          console.log('exec error: ' + error);
        }
    });
}
