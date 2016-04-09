var React = require('react');

var MoviePoster = React.createClass({
  render: function() {
    var posterBaseURL = 'https://image.tmdb.org/t/p/';

    return <img src={posterBaseURL + this.props.posterSize + this.props.posterPath} />;
  }
});

module.exports = MoviePoster;