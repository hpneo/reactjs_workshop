var React = require('react');

var MovieLikeCounter = React.createClass({
  render: function() {
    var message;

    if (this.props.likes === 0) {
      message = "This movie hasn't been liked yet.";
    }
    else if (this.props.likes === 1) {
      message = "This movie has 1 like.";
    }
    else {
      message = "This movie has " + this.props.likes + " likes.";
    }

    return <span>{message}</span>;
  }
});

module.exports = MovieLikeCounter;