var angular = require('angular');

module.exports = angular
    .module('app.login', [])
    .config(require('./login.route.js'))
    .name;
