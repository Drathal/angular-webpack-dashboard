require('angular');
require('angular-mocks');
global.$ = require('jquery');

var componentsContext = require.context('../src/components', true, /.js$/);
componentsContext.keys().forEach(componentsContext);

var pageContext = require.context('../src/pages', true, /.js$/);
pageContext.keys().forEach(pageContext);
