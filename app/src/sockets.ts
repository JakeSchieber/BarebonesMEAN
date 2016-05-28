/// <reference path="../../typings/tsd.d.ts" />
"use strict";

/**
 * The creation of the SocketIO.Server connection requires the created
 * http server reference. This is created in server.js and passed in as
 * an argument to the socketInit function.
 */
import * as SocketIO from 'socket.io';

export function socketInit(io: SocketIO.Server) {
  io.on('connection', function (socket) {
    console.log("Connection Established.");
  });
}