var angular = require('angular');

module.exports = angular
    .module('component.service.menu', [])
    .service(require('./menu-service').name, require('./menu-service').component)
    .name;
