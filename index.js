const http = require('http');

let app = require('build/server.js').default;

try {
    app = require('./server').default;
} catch (error) {
    console.error(error);
}
