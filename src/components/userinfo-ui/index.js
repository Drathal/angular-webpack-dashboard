var angular = require('angular');
require('./userinfo.scss');

module.exports = angular
    .module('component.ui.userInfo', [])
    .directive('uiUserInfo', function () {
        return {
            scope: {},
            controller: require('./userinfo.ctrl.js'),
            controllerAs: 'userInfoController',
            bindToController: true,
            template: require('./userinfo.html')
        };
    })
    .name;
