var angular = require('angular');

module.exports = angular
    .module('component.ui.counter', [])
    .directive(require('./module').name, require('./module').component)
    .name;
