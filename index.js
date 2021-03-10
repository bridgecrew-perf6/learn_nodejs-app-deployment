'use strict';

const mocks = require('ronin-mocks');
const ronin = require('ronin-server');

const server = ronin.server();

server.use('/', mocks.server(server.Router(), false, true));
server.start();
