var angular = require('angular');

module.exports = angular
    .module('component.ui.userInfo', [])
    .directive(require('./module').name, require('./module').component)
    .name;
