var ReactDOM = require('react-dom');
var { Hello } = require('./hello-react.class');

class HelloReact {

    /*@ngInject*/
    constructor() {
        this.scope = {
            myname: '@'
        };
        this.restrict = 'E';
    }

    link($scope, $element) {
        ReactDOM.render(Hello({name: $scope.myname}), $element[0]);
    }

    static directive() {
        'ngInject';
        return new HelloReact();
    }

}

export { HelloReact };
