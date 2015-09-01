var angular = require('angular');

module.exports = angular
    .module('app.feature-a', [
        require('../../components/menu-service'),
    ])
    .config(require('./feature-a.route.js').config)
    .run(require('./feature-a.route.js').run)
    .name;

