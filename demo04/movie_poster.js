var React = require('react');

var MoviePoster = React.createClass({
  propTypes: {
    // posterSize: function(props, propName, componentName) {
    //   if (!props[propName].match(/^w/)) {
    //     return new Error("posterSize should be w***");
    //   }
    // }
    posterSize: React.PropTypes.number
  },
  render: function() {
    var posterBaseURL = 'https://image.tmdb.org/t/p/';

    return <img src={posterBaseURL + "w" + this.props.posterSize + this.props.posterPath} />;
  }
});

module.exports = MoviePoster;