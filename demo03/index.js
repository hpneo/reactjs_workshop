var React = require('react'),
    ReactDOM = require('react-dom');

var obj = { value: "Pepito" };

var Lifecycle = React.createClass({
  getInitialState: function() {
    console.log('getInitialState');
    return { state1: 'state' };
  },
  getDefaultProps: function() {
    console.log('getDefaultProps');
    return { name: { value: 'Default' } };
  },
  componentWillMount: function() {
    console.log('componentWillMount');
  },
  componentDidMount: function() {
    console.log('componentDidMount');

    var self = this;

    this.refs.title.innerText = 'Demo 03';
    this.refs.title.style = 'font-weight: bold';

    setTimeout(function() {
      self.setState({ state1: 'newState' });
    }, 1500);

    setTimeout(function() {
      self.props.name.value = "Juanito";
      self.forceUpdate();
      // ReactDOM.render(<Lifecycle name={obj} />, document.querySelector('#app'));
    }, 3500);
  },
  componentWillReceiveProps: function() {
    console.log('componentWillReceiveProps', arguments);
  },
  shouldComponentUpdate: function() {
    console.log('shouldComponentUpdate', arguments);
    return true;
  },
  componentWillUpdate: function() {
    console.log('componentWillUpdate', arguments);
  },
  componentDidUpdate: function() {
    console.log('componentDidUpdate', arguments);
  },
  render: function() {
    return (
      <ul>
        <li ref="title"></li>
        <li>{this.state.state1}</li>
        <li>{this.props.name.value}</li>
      </ul>
    );
  }
});

ReactDOM.render(<Lifecycle name={obj} />, document.querySelector('#app'));