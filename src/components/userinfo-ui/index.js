var angular = require('angular');
require('./userinfo.scss');

module.exports = angular
    .module('component.ui.userInfo', [
        require('angular-material'),
        require('angular-translate')
    ])
    .directive('uiUserInfo', function () {
        return {
            scope: {},
            controller: require('./userinfo.ctrl.js'),
            controllerAs: 'ctrl',
            bindToController: true,
            template: require('./userinfo.html')
        };
    })
    .config(function (translationLoaderProvider) {
        translationLoaderProvider.add('userinfo-ui', __dirname);
    })
    .name;
