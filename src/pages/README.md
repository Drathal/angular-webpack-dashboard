# adding pages

each page component must be registred in `index.js`
 
## example

```
module.exports = angular
    .module('app.pages', [
        require('./feature-a'),
        require('./feature-b'),
        require('./feature-c')
    ])
    .name;
```