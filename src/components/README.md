# adding components

each component must be registred in `index.js`
 
## example

```
module.exports = angular
    .module('app.components', [
        require('./userinfo-ui'),
        require('./counter-ui')
    ])
    .name;
```