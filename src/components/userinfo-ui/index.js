var angular = require('angular');

module.exports = angular
    .module('cleverbridge.ui.userInfo', [])
    .directive(require('./module').name, require('./module').component)
    .name;
