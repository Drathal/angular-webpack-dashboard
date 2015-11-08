var angular = require('angular');

import { HelloReact } from './hello-react';

module.exports = angular
    .module('app.ui.helloReact', [])
    .directive('helloReact', HelloReact.directive)
    .name;
