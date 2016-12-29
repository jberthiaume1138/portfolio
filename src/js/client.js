var React = require('react');
var ReactDOM = require('react-dom');

class MyComponent extends React.Component {
    render() {
        return <div>Where did it go?!?!?!</div>
    }
};

var app = document.getElementById('app');

ReactDOM.render(
    <MyComponent />,
    app
)
