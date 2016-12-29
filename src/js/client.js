var React = require('react');
var ReactDOM = require('react-dom');

// var myDiv = document.getElementById('app');
// myDiv.innerHTML = "Turkey and Gravy";


// ES6 version -- this doesn't seem to work at all
class MyComponent extends React.Component {
    render() {
        return <div>Where did it go?!?!?!</div>
    }
};

// // ES5 version
// var MyComponent = React.createClass({
//     render: function() {
//         return <div>Hello World, using ES5 syntax!!!</div>;
//     }
// });

var app = document.getElementById('app');

ReactDOM.render(
    <MyComponent />,
    app
)
