var angular = require('angular');

module.exports = angular
    .module('cleverbridge.service.menu', [])
    .service(require('./module').name, require('./module').component)
    .name;
