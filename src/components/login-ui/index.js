var angular = require('angular');
require('./login.scss');

module.exports = angular
    .module('component.ui.login', [])
    .directive('login', function() {
        return {
            controller: require('./login.ctrl'),
            controllerAs: 'ctrl',
            bindToController: true,
            template: require('./login.html')
        };
    })
    .name;
