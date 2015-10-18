var angular = require('angular');

module.exports = angular
    .module('app.feature-b', [
        require('../../components/menu-service'),
        require('../../components/counter-ui'),
        require('./feature-b-ui'),
        require('./scopeOverload')
    ])
    .config(require('./feature-b.route.js'))
    .run(require('./feature-b.menu.js'))
    .name;

