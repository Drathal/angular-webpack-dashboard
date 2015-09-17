import './test.scss';
var angular = require('angular');

module.exports = angular
    .module('layout-full.test', [
        require('angular-resource')
    ])
    .config(require('./test.route.js').config)
    .run(require('./test.route.js').run)
    .directive('test', function () {
        return {
            scope: {
                data: '='
            },
            controller: require('./test.ctrl.js'),
            controllerAs: 'ctrl',
            bindToController: true,
            template: require('./test.html')
        };
    })
    .factory('Gists', ['$resource', function ($resource) {
        return $resource('http://localhost:8888/data/sample.json');
    }])
    .name;
