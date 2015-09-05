require('angular');
require('angular-mocks');
require('../node_modules/bardjs/dist/bard');
global.$ = require('../node_modules/jquery/dist/jquery');

var testsContext = require.context('../src', true, /.spec.js$/);
testsContext.keys().forEach(testsContext);

var componentsContext = require.context('../src', true, /^(?:(?!.*\.spec.js).)*\.js$/);
componentsContext.keys().forEach(componentsContext);

