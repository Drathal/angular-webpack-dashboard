require('./heallo-react.scss');
var React = require('react');

var Hello = React.createFactory(React.createClass({
    displayName: 'Hello',
    render: function () {
        var message = 'hello ' + this.props.name + '! I am a react.js component.';
        return (
            React.createElement('div', {className: 'react-hello'}, message,
                React.createElement('p', null, 'test')
            ));
    }
}));

export { Hello };
