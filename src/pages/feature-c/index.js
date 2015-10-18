var angular = require('angular');

module.exports = angular
    .module('app.feature-c', [
        require('../../components/menu-service'),
        require('../feature-a/feature-a-ui'),
        require('../feature-b/feature-b-ui')
    ])
    .config(require('./feature-c.route.js'))
    .run(require('./feature-c.menu.js'))
    .name;
