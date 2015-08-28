var angular = require('angular');

module.exports = angular
    .module('cleverbridge.ui.menu', [
        require('../menu-service')
    ])
    .directive(require('./module').name, require('./module').component)
    .name;
