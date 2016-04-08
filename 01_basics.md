# Introducción a React

React viene con muchos conceptos nuevos, por lo que es importante comentarlos desde el principio:

## Vistas

React es una bibilioteca que solo se encarga de construir vistas para nuestras aplicaciones, por lo que puede ser utilizada junto a otras bibliotecas o frameworks, como Backbone, Angular, Ember, incluso PhoneGap.

## Programación declarativa

React utiliza un paradigma llamado programación declarativa, lo que implica definir *qué* hace un programa, mas no *cómo* lo hace.

En el caso de React, definimos *qué* elementos debe tener una vista (incluyendo los datos que debe contener), y React se encarga de construirla, y de actualizarla si encuentra cambios en los datos que contiene dicha vista.

## Virtual DOM

React viene con varios conceptos nuevos. Uno de ellos es el Virtual DOM, una abstracción del DOM que sirve para saber cuándo debe actualizarse una vista de React. Virtual DOM representa el DOM como una estructura, la que recorre cuando se cambian datos asociados a la vista.

![Virtual DOM explanation: http://techblog.constantcontact.com/software-development/reactive-component-based-uis/][virtual_dom]

## Components

Aparte de la programación declarativa y el Virtual DOM, React *obliga* a los desarrolladores a pensar en las vistas como un conjunto de componentes, dividiendo una vista en pequeñas partes más simples y reutilizables.

![React Components: http://maketea.co.uk/2014/03/05/building-robust-web-apps-with-react-part-1.html][components]

## JSX

React incorpora una nueva sintaxis para crear vistas, llamado JSX. Bastante similar a HTML, simplifica mucho la construcción de vistas, reutilización de componentes y paso de variables entre ellos.

![JSX Syntax][jsx]

## Server-side React

React no solo sirve para crear vistas en el lado del cliente, si no que permite construir vistas (y reutilizar código) en el servidor. React puede ser utilizado con Node.js, pero también con PHP, Rails y .Net.

[virtual_dom]: images/virtual_dom.png "Virtual DOM explanation: http://techblog.constantcontact.com/software-development/reactive-component-based-uis/"

[components]: images/components.png "React Components: http://maketea.co.uk/2014/03/05/building-robust-web-apps-with-react-part-1.html"

[jsx]: images/jsx.png "JSX Syntax"