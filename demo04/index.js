var React = require('react'),
    ReactDOM = require('react-dom'),
    MoviePoster = require('./movie_poster'),
    MovieLikeCounter = require('./movie_like_counter'),
    MovieLikeButton = require('./movie_like_button');

var MovieItem = React.createClass({
  getInitialState: function() {
    return { likes: this.props.likes }
  },
  onClickLikeButton: function() {
    this.setState({ likes: this.state.likes + 1 });
  },
  render: function() {
    return (
      <div className="movie">
        <MoviePoster posterSize="185" posterPath={this.props.posterPath} />
        <MovieLikeCounter likes={this.state.likes} />
        <MovieLikeButton onClickButton={this.onClickLikeButton} />
      </div>
    );
  }
});

ReactDOM.render(<MovieItem posterPath="/4ctv9pxKpwjTFevWQbvaqXkXbPF.jpg" likes={1} />, document.querySelector('#app'));

// browserify -t [ babelify --presets [ react ] ] index.js -o bundle.js