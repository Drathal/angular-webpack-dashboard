var angular = require('angular');

module.exports = angular
    .module('app.feature-a', [
        require('../../components/menu-service'),
    ])
    .config(require('./route.js').config)
    .run(require('./route.js').run)
    .name;

