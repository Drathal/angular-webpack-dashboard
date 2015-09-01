var angular = require('angular');
require('./index.scss');

module.exports = angular
    .module('component.ui.userInfo', [])
    .directive(require('./module').name, require('./module').component)
    .name;
