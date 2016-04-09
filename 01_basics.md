# Introducción a React

## Conceptos

React viene con muchos conceptos nuevos, por lo que es importante comentarlos desde el principio:

### Vistas

React es una bibilioteca que solo se encarga de construir vistas para nuestras aplicaciones, por lo que puede ser utilizada junto a otras bibliotecas o frameworks, como Backbone, Angular, Ember, incluso PhoneGap.

### Programación declarativa

React utiliza un paradigma llamado programación declarativa, lo que implica definir *qué* hace un programa, mas no *cómo* lo hace.

En el caso de React, definimos *qué* elementos debe tener una vista (incluyendo los datos que debe contener), y React se encarga de construirla, y de actualizarla si encuentra cambios en los datos que contiene dicha vista.

### Virtual DOM

React viene con varios conceptos nuevos. Uno de ellos es el Virtual DOM, una abstracción del DOM que sirve para saber cuándo debe actualizarse una vista de React. Virtual DOM representa el DOM como una estructura, la que recorre cuando se cambian datos asociados a la vista.

![Virtual DOM explanation: http://techblog.constantcontact.com/software-development/reactive-component-based-uis/][virtual_dom]

### Components

Aparte de la programación declarativa y el Virtual DOM, React *obliga* a los desarrolladores a pensar en las vistas como un conjunto de componentes, dividiendo una vista en pequeñas partes más simples y reutilizables.

![React Components: http://maketea.co.uk/2014/03/05/building-robust-web-apps-with-react-part-1.html][components]

### JSX

React incorpora una nueva sintaxis para crear vistas, llamado JSX. Bastante similar a HTML, simplifica mucho la construcción de vistas, reutilización de componentes y paso de variables entre ellos.

![JSX Syntax][jsx]

### Server-side React

React no solo sirve para crear vistas en el lado del cliente, si no que permite construir vistas (y reutilizar código) en el servidor. React puede ser utilizado con Node.js, pero también con PHP, Rails y .Net.

---

## Instalación

Para instalar React necesitamos tener instalado [`npm`](https://npmjs.com). Con `npm` instalamos los siguientes paquetes:

* `react`: Biblioteca base de React.
* `react-dom`: Biblioteca para trabajar con React en el browser.
* `browserify`: *Bundler* para convertir módulos de NPM en scripts para el browser.
* `babelify`: Plugin para `browserify` para convertir código ES2015/ES6 en JavaScript/ES5 usando [Babel](https://babeljs.io).
* `babel-preset-react`: Plugin para `babelify` que compila JSX en JavaScript.

```bash
npm install --save react react-dom babelify babel-preset-react
```

## Uso

Luego de instalar `react` y `react-dom` creamos nuestra primera vista de React (llamada `main.js`):

```javascript
var React = require('react'),
    ReactDOM = require('react-dom');

var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(<HelloMessage name="John" />, document.querySelector('#app'));
```

Para convertir nuestro código de React en código usable en el navegador usamos el siguiente comando:

```bash
browserify -t [ babelify --presets [ react ] ] main.js -o bundle.js
```

[virtual_dom]: images/virtual_dom.png "Virtual DOM explanation: http://techblog.constantcontact.com/software-development/reactive-component-based-uis/"

[components]: images/components.png "React Components: http://maketea.co.uk/2014/03/05/building-robust-web-apps-with-react-part-1.html"

[jsx]: images/jsx.png "JSX Syntax"