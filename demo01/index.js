var React = require('react'),
    ReactDOM = require('react-dom');

var styles = { backgroundColor: 'red' };

var HelloComponent = React.createClass({
  render: function() {
    return <div className="message" style={styles}>Hola {this.props.name}</div>;
  }
});

ReactDOM.render(<HelloComponent name="Pepito" />, document.querySelector('#app'));

// browserify -t [ babelify --presets [ react ] ] index.js -o bundle.js