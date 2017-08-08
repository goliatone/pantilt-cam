var resolve = require('path').resolve;
var startCamera = resolve(__dirname + '/../bin/start_camera');
var stopCamera = resolve(__dirname + '/../bin/stop_camera');

module.exports.start = function(callback){
    require('child_process').exec(startCamera, callback);
};

module.exports.stop = function(callback){
    require('child_process').exec(stopCamera, callback);
};
