var angular = require('angular');
require('./language-select.scss');

module.exports = angular
    .module('component.ui.languageSelect', [
        require('angular-material')
    ])
    .directive('uiLanguageSelect', function () {
        return {
            controller: require('./language-select.ctrl'),
            controllerAs: 'ctrl',
            bindToController: true,
            template: require('./language-select.html')
        };
    })
    .config(function () {

    })
    .name;
