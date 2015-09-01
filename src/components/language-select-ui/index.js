var angular = require('angular');
require('./index.scss');

module.exports = angular
    .module('component.ui.languageSelect', [
        require('angular-material'),
        require('angular-translate')
    ])
    .directive(require('./module').name, require('./module').component)
    .name;
