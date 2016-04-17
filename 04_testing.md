# Testing

## ReactTestUtils

React tiene una biblioteca extra llamado `react-addons-test-utils`, el cual contiene diferentes métodos utilitarios para realizar pruebas sobre componentes de React. Esta biblioteca puede ser utilizada junto a cualquier biblioteca de pruebas.

Por ejemplo, teniendo este componente:

```javascript
var MovieLikeButton = React.createClass({
  getInitialState: function() {
    return { liked: false }
  },
  onClickButton: function() {
    this.setState({ liked: !this.state.liked });
  },
  render: function() {
    var message;

    if (this.state.liked) {
      message = "Dislike";
    }
    else {
      message = "Like";
    }

    return <button onClick={this.onClickButton}>{message}</button>;
  }
});
```

Podemos usar ReactTestUtils de la siguiente forma:

```javascript
var ReactTestUtils = require('react-addons-test-utils');

var likeButton = ReactTestUtils.renderIntoDocument(<MovieLikeButton />);
var likeButtonNode = ReactDOM.findDOMNode(likeButton);

expect(likeButtonNode.textContent).toEqual('Like');

TestUtils.Simulate.click(likeButton);

expect(likeButtonNode.textContent).toEqual('Dislike');
```