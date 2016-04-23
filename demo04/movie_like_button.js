var React = require('react');

var MovieLikeButton = React.createClass({
  getInitialState: function() {
    return { liked: false }
  },
  onClick: function() {
    if (typeof this.props.onClickButton === 'function') {
      this.props.onClickButton();
      this.setState({ liked: true });
    }
    else {
      this.setState({ liked: !this.state.liked });
    }
  },
  render: function() {
    var message = "Like";

    if (typeof this.props.onClickButton === 'function') {
      if (this.state.liked) {
        message = "Liked";
      }
    }
    else {
      if (this.state.liked) {
        message = "Dislike";
      }
      else {
        message = "Like";
      }
    }

    return <button onClick={this.onClick}>{message}</button>;
  }
});

module.exports = MovieLikeButton;