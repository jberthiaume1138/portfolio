var React = require('react');
var ReactDOM = require('react-dom');

// var myDiv = document.getElementById('app');
// myDiv.innerHTML = "Turkey and Gravy";

var MyComponent = React.createClass({
    render: function() {
        return <div>This is my component there are many like it</div>
    }
});

var app = document.getElementById('app');

ReactDOM.render(
    <MyComponent />,
    app
)
