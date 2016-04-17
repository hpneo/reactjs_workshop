# Props

Las propiedades son la forma de React de separar la data de la vista, por lo que podemos pasar esta data a través de los componentes que conforman una vista.

## Prop Validation

Para asegurarnos que la data llegue correctamente a los componentes, podemos validarlos, utilizando el objeto `propTypes` dentro de `React.createClass`. Existen validaciones de tipo, así como propias de React, e incluso se pueden escribir validaciones personalizadas:

```javascript
var MoviePoster = React.createClass({
  propTypes: {
    posterPath: React.PropTypes.string.isRequired,
    posterSize: React.PropTypes.string,
  },
  render: function() {
    var posterBaseURL = 'https://image.tmdb.org/t/p/';

    return <img src={posterBaseURL + this.props.posterSize + this.props.posterPath} />;
  }
});

ReactDOM.render(<MoviePoster posterPath="/4ctv9pxKpwjTFevWQbvaqXkXbPF.jpg" posterSize="w185" />, document.querySelector("#movie-7"));
```

La lista de validaciones se encuentra en [la documentación de React](http://facebook.github.io/react/docs/reusable-components.html).

## Transferring props

Transferir propiedades de un componente a otro se puede hacer de dos formas: manualmente o utilizando el *spread operator* (`...`). Utilizando `...` podemos definir qué subconjunto de propiedades vamos a pasar a otro componente:

```javascript
var MovieItem = React.createClass({
  render: function() {
    var { likes, ...moviePosterProps } = this.props;

    return (
      <div className="movie">
        <MoviePoster {...moviePosterProps} />
        <MovieLikeCounter {...likes} />
        <MovieLikeButton />
      </div>
    );
  }
});

ReactDOM.render(<MovieItem posterPath="/4ctv9pxKpwjTFevWQbvaqXkXbPF.jpg" posterSize="w185" likes={1} />, document.querySelector("#movie-9"));
```