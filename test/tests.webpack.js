var testsContext = require.context('../src', true, /.spec.js$/);
testsContext.keys().forEach(testsContext);

var componentsContext = require.context('../src', true, /^(?:(?!.*\.spec.js).)*\.js$/);
componentsContext.keys().forEach(componentsContext);
