'use strict';
var io;
var servos = require('./camera/servos');
var camera = require('./camera');
servos.init();

module.exports = function(app, config){
    var server = app.server;
    io = require('socket.io')(server);

    app.io = io;

    io.on('connection', function(socket){
        console.log('socket connected', socket.id);

        socket.on('cam.pan', function(data){
            console.log('Pan', data);
            servos.pan(data.value);
        });

        socket.on('cam.tilt', function(data){
            console.log('Tilt', data);
            servos.tilt(data.value);
        });

        socket.on('cam.start', function(){
            camera.start(function(err, stdout, stderr){
                socket.emit('cam.status', {
                    on: !!err
                });
            });
        });

        socket.on('cam.stop', function(){
            camera.stop(function(err, stdout, stderr){
                socket.emit('cam.status', {
                    on: !!err
                });
            });
        });
    });
};
