# Components

Un componente es una parte de la vista construida con React. React estimula la creación de componentes para la creación de vistas, ya que permite separar una vista en partes más fáciles de mantener y probar.

Un componente puede ser escrito utilizando JSX o JavaScript:

Con JSX:

```javascript
var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(<HelloMessage name="John" />, document.querySelector('#app'));
```

Con JavaScript:

```javascript
var HelloMessage = React.createClass({
  displayName: "HelloMessage",
  render: function render() {
    return React.createElement(
      "div",            // nombre del componente
      null,             // propiedades del elemento
      "Hello ",         // elementos hijos...
      this.props.name   // elementos hijos...
    );
  }
});

ReactDOM.render(React.createElement(HelloMessage, { name: "John" }), document.querySelector('#app'));
```

Aunque es recomendable utilizar JSX por la simplicidad de sintaxis y la familiaridad con HTML.

## Componentes y elementos

React maneja dos términos básicos: Componentes y Elementos. Mientras los Componentes son clases, los Elementos son instancias de estas clases. Pero además, un elemento también puede ser un elemento HTML (como en el caso anterior, donde se crea un elemento `<div></div>`).

## Componentes reutilizables

Cuando pensamos en componentes reutilizables tratamos de imaginar una vista como un conjunto de objetos que pueden repetirse (por ejemplo: un botón o un elemento de lista).

```javascript
var MoviePoster = React.createClass({
  render: function() {
    var posterBaseURL = 'https://image.tmdb.org/t/p/';

    return <img src={posterBaseURL + this.props.posterSize + this.props.posterPath} />;
  }
});

ReactDOM.render(<MoviePoster posterSize="w185" posterPath="/2lECpi35Hnbpa4y46JX0aY3AWTy.jpg" />, document.querySelector('#movie-1'));

ReactDOM.render(<MoviePoster posterSize="w185" posterPath="/4ctv9pxKpwjTFevWQbvaqXkXbPF.jpg" />, document.querySelector('#movie-2'));
```

## Atributos: Props & States

Un punto importante a tener en cuenta cuando creamos componentes reutilizables es identificar qué valores serán dinámicos. Como se puede ver en los ejemplos anteriores, un componente de React acepta valores que luego son utilizados dentro del objeto `this.props`, y son llamados *props*.

Una propiedad (o *prop*) dentro de un componente de React es la data (o el *modelo*) que está asociado a esa parte de la vista. React utiliza estos *props* para mostrar información, y pueden ser de cualquier tipo (desde cadenas hasta funciones).

```javascript
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

ReactDOM.render(<MovieLikeCounter likes={1} />, document.querySelector("#movie-3"));
```

Por otro lado, un componente de React tiene estados, o *states*, que permite hacer una interfaz interactiva y manejar diferentes estados dentro de una vista. Al actualizar un *state*, React verifica el nuevo estado y renderiza las partes del componente que son afectados por dicho estado.

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

ReactDOM.render(<MovieLikeButton />, document.querySelector("#movie-4"));
```

Como mencioné antes, una propiedad también puede ser una función. Esto permite agregarle funcionalidades a nuestras vistas a través del uso de eventos.

Dentro de un componente podemos definir un estado inicial, como en este caso, utilizando la función `getInitialState`.

## Composition y componentes hijos

Al dividir una vista en componentes significa tener que agrupar componentes para crear vistas. A esto le llamamos *composition*. Los componentes que se encuentran agrupados dentro de otro componente son llamados *componentes hijos*. En este caso, agrupamos los componentes definidos anteriormente y tenemos tres componentes hijos:

```javascript
var MovieItem = React.createClass({
  render: function() {
    return (
      <div className="movie">
        <MoviePoster posterSize="w185" posterPath={this.props.posterPath} />
        <MovieLikeCounter likes={this.props.likes} />
        <MovieLikeButton />
      </div>
    );
  }
});

ReactDOM.render(<MovieItem posterPath="/4ctv9pxKpwjTFevWQbvaqXkXbPF.jpg" likes={1} />, document.querySelector("#movie-5"));
```

## Componentes hijos dinámicos

Los componentes hijos no solo sirven para agrupar componentes. También podemos la agrupación de estos componentes, como en este ejemplo:

```javascript
var movies = [
  {
    posterPath: "/811DjJTon9gD6hZ8nCjSitaIXFQ.jpg",
    likes: 8
  },
  {
    posterPath: "/4ctv9pxKpwjTFevWQbvaqXkXbPF.jpg",
    likes: 7
  },{
    posterPath: "/29veIwD38rVL2qY74emXQw4y25H.jpg",
    likes: 9
  },
  {
    posterPath: "/s1GeJcwTclopbed1Bo2hjunSika.jpg",
    likes: 6
  }
];

var MovieCollection = React.createClass({
  render: function() {
    return (
      <section>{this.props.movies.map(function(movie) {
        return <MovieItem posterPath={movie.posterPath} likes={movie.likes} />
      })}</section>
    );
  }
});

ReactDOM.render(<MovieCollection movies={movies} />, document.querySelector("#movies"));
```

De esta forma podemos transformar una colección de modelos en una vista con sus respectivas representaciones.

## Component Lifecycle

Un componente pasa por varios escenarios, de acuerdo a la data que esté siendo manipulada y al estadío en el que se encuentre.

### Primer renderizado

Por ejemplo, la primera vez que un componente es renderizado, ejecuta los siguientes métodos:

1. `getDefaultProps`: Retorna un objeto con las propiedades por defecto que debe tener un componente.
2. `getInitialState`: Retorna un objeto con los estados iniciales que tiene un componente.
3. `componentWillMount`: Se ejecuta antes de hacer el renderizado (tanto en el cliente como en el servidor).
4. `render`: Renderiza el componente (tanto en el cliente como en el servidor).
5. `componentDidMount`: Se ejecuta después de realizar el renderizado (solo en el cliente). Dentro de esta función se puede acceder a los nodos DOM renderizados por el componente.

![Execution sequence of a React component’s lifecycle methods: http://javascript.tutorialhorizon.com/2014/09/13/execution-sequence-of-a-react-components-lifecycle-methods/][initial_render]

### Actualización de props y states

El ciclo de vida en ambos casos es similar, y solo se diferencia en la forma cómo maneja los cambios:

#### Actualización de props

1. `componentWillReceiveProps`: Se ejecuta después de recibir nuevos props y toma como parámetro un objeto con los nuevos props.
2. `shouldComponentUpdate`: Retorna un booleano, para saber si un componente debe o no actualizarse. Recibe como parámetros dos objetos: los nuevos props y los nuevos states.
3. `componentWillUpdate`: Se ejecuta antes de renderizar el componente con los nuevos props/states. Recibe como parámetros dos objetos: los nuevos props y los nuevos states.
4. `render`: Renderiza el componente con los nuevos props/states.
5. `componentDidUpdate`: Se ejecuta después de realizar el renderizado con los nuevos props/states. Dentro de esta función se puede acceder a los nodos DOM actualizados. Recibe como parámetros los props/states previos a la actualización.

![Execution sequence of a React component’s lifecycle methods: http://javascript.tutorialhorizon.com/2014/09/13/execution-sequence-of-a-react-components-lifecycle-methods/][props_change]

#### Actualización de states

En el caso de la actualización de states, se ejecutan los métodos anteriores en el mismo orden, excepto `componentWillReceiveProps`, que es solo para actualización de propiedades.

![Execution sequence of a React component’s lifecycle methods: http://javascript.tutorialhorizon.com/2014/09/13/execution-sequence-of-a-react-components-lifecycle-methods/][state_change]

### Desmontaje

En este escenario solo existe un método, llamado `componentWillUnmount`, el cual se ejecuta antes de desmontar el componente del DOM. Sirve para limpiar timers o eliminar nodos DOM creados en `componentDidMount` o `componentDidUpdate`.

![Execution sequence of a React component’s lifecycle methods: http://javascript.tutorialhorizon.com/2014/09/13/execution-sequence-of-a-react-components-lifecycle-methods/][unmount]

## Eventos

React maneja los eventos a través de un wrapper cross-browser, llamado `SyntheticEvent`, el cual tiene las mismas propiedades que un evento del DOM. `SyntheticEvent` es reutilizado en cada evento, por lo que sus propiedades se vuelven `null` luego de ser usado en un evento y no puede usarse de forma asíncrona.

React mapea todos los eventos del DOM, agregando un prefijo `on` y con los nombres en CamelCase. Por ejemplo:

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

ReactDOM.render(<MovieLikeButton />, document.querySelector("#movie-6"));
```

La lista completa de eventos está disponible en [la documentación de React](https://facebook.github.io/react/docs/events.html).

## Referencias a nodos DOM

React permite manejar referencias a los elementos que definimos mediante JSX, estas referencias pueden ser tanto a instancias de componentes de React como a nodos DOM. Esto es útil cuando necesitamos dinamizar algun elemento usando jQuery u otra biblioteca:

```javascript
var MovieLikeCounter = React.createClass({
  componentDidMount: function() {
    $(this.refs.rating).starCounter({ value: this.props.likes });
  },
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

    return <span ref="rating">{message}</span>;
  }
});

ReactDOM.render(<MovieLikeCounter likes={1} />, document.querySelector("#movie-7"));
```

[initial_render]: images/lifecycle_1.png "Execution sequence of a React component’s lifecycle methods: http://javascript.tutorialhorizon.com/2014/09/13/execution-sequence-of-a-react-components-lifecycle-methods/"

[props_change]: images/lifecycle_2.png "Execution sequence of a React component’s lifecycle methods: http://javascript.tutorialhorizon.com/2014/09/13/execution-sequence-of-a-react-components-lifecycle-methods/"

[state_change]: images/lifecycle_3.png "Execution sequence of a React component’s lifecycle methods: http://javascript.tutorialhorizon.com/2014/09/13/execution-sequence-of-a-react-components-lifecycle-methods/"

[unmount]: images/lifecycle_4.png "Execution sequence of a React component’s lifecycle methods: http://javascript.tutorialhorizon.com/2014/09/13/execution-sequence-of-a-react-components-lifecycle-methods/"