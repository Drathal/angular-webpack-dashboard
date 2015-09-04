var angular = require('angular');

module.exports = angular
    .module('app.feature-c', [
        require('../../components/menu-service')
    ])
    .config(require('./feature-c.route.js').config)
    .run(require('./feature-c.route.js').run)
    .name;
