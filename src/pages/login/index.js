import './login.scss';
var angular = require('angular');

module.exports = angular
    .module('layout-full.login', [])
    .config(require('./login.route.js').config)
    .run(require('./login.route.js').run)
    .directive('login', function () {
        return {
            scope: {
                data: '='
            },
            controller: require('./login.ctrl.js'),
            controllerAs: 'ctrl',
            bindToController: true,
            template: require('./login.html')
        };
    })
    .name;
