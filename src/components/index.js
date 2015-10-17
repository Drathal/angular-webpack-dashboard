var angular = require('angular');

module.exports = angular
    .module('app.components', [
        require('./app'),
        require('./userinfo-ui'),
        require('./counter-ui'),
        require('./menu-ui'),
        require('./language-service'),
        require('./language-select-ui'),
        require('./bind-html-compile'),
        require('./layout-full'),
        require('./layout-sidebar')
    ])
    .name;
