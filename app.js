require('source-map-support').install();
require('babel-polyfill');
require('babel-register');
require('songbird');

require('./app/server');
