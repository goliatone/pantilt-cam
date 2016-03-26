var servoblaster = require('servoblaster');
var repl = require('repl');
var stream = servoblaster.createWriteStream();

module.exports.init = function(){
    stream.write({ pin: 0, value: '50%' }); // Specify ServoBlaster ID
    setTimeout(function(){
        stream.write({ pin: 1, value: '50%' }); // Specify pin number
    }, 500);
};

module.exports.tilt = function(value){
    stream.write({pin:1, value: value});
};

module.exports.pan = function(value){
    stream.write({pin:0, value: value});
};

module.exports.off = function(){
    stream.end();
};

process.on('exit', function(){
    stream.end();
});
