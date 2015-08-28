var angular = require('angular');

module.exports = angular
    .module('cleverbridge.ui.counter', [])
    .directive(require('./module').name, require('./module').component)
    .name;
