let path = require('path');

let config = {};

config = {
    build: {
        env: require('./prod.env')
    }
};
module.exports = config;