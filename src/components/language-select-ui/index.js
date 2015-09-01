var angular = require('angular');
require('./language-select.scss');

module.exports = angular
    .module('component.ui.languageSelect', [
        require('angular-material'),
        require('angular-translate')
    ])
    .directive('uiLanguageSelect', function () {
        return {
            controller: require('./language-select.ctrl'),
            controllerAs: 'ctrl',
            bindToController: true,
            template: require('./language-select.html')
        };
    })
    .config(function (translationLoaderProvider) {
        translationLoaderProvider.add('language-select-ui', __dirname);
    })
    .name;
