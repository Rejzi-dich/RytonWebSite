const path = require('path');

module.exports = function override(config) {
    config.resolve.modules = [
        path.resolve(__dirname, 'node_modules'),
        'node_modules'
    ];
    return config;
}
