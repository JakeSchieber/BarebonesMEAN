"use strict";
function socketInit(io) {
    io.on('connection', function (socket) {
        console.log("Connection Established.");
    });
}
exports.socketInit = socketInit;
