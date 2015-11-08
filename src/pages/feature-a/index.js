var angular = require('angular');

module.exports = angular
    .module('app.feature-a', [
        require('../../components/menu-service'),
        require('../../components/hello-react-ui'),
        require('./feature-a-ui')
    ])
    .config(require('./feature-a.route.js'))
    .run(require('./feature-a.menu.js'))
    .name;
