'use strict';
var io;
module.exports = function(app, config){
    var server = app.server;
    io = require('socket.io')(server);

    app.io = io;

    io.on('connection', function(socket){
        console.log('socket connected', socket.id);

        socket.on('cam.pan', function(data){
            console.log('Pan', data);
        });

        socket.on('cam.tilt', function(data){
            console.log('Tilt', data);
        });
    });
};
