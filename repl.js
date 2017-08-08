var servoblaster = require('servoblaster');
var repl = require('repl');
var stream = servoblaster.createWriteStream();


function init(){
    stream.write({ pin: 0, value: 150 }); // Specify ServoBlaster ID
    setTimeout(function(){
        stream.write({ pin: 1, value: 150 }); // Specify pin number
    }, 500);
}

init();

// stream.end();
var server = repl.start('> ');
server.context.pan = function(value){
    stream.write({pin:0, value: value});
};

server.context.tilt = function(value){
    stream.write({pin:1, value: value});
    return server.context;
};

server.context.off = function(){
    stream.end();
    return server.context;
};

server.context.stream = stream;

server.defineCommand('pan', {
    help: 'ServoBlaster pan',
    action: function(value){
        stream.write({pin:0, value: value});
        this.displayPrompt();
    }
});

server.defineCommand('tilt', {
    help: 'ServoBlaster tilt',
    action: function(value){
        stream.write({pin:1, value: value});
        this.displayPrompt();
    }
});
process.on('exit', function(){
    stream.end();
});
