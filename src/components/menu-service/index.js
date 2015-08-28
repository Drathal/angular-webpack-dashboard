var angular = require('angular');

module.exports = angular
    .module('component.service.menu', [])
    .service(require('./module').name, require('./module').component)
    .name;
