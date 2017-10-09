# Pruebas de concepto en Ionic

**INDICE**
1. [Sobre este repositorio](#id1)
2. [Estructura de un proyecto en ionic](#id2)
3. [Ciclo de vida de un componente en ionic]()
4. [Ionic CLI]()
5. [Diseño de un page]()
6. [Manejo de widgets]()
  1. [Dialogs]()
  2. [Alerts]()
7. [Manejo del theme]()
8. [Recursos nativo]()
9. [Librerías de terceros]()


<h2 id="id1">Sobre este repositorio</h2>
Este repositorio es creado con el objetivo de ir consolidando las pruebas de concepto necesarias para hacer más sencillo y
entendible la transición del uso del framework ionic a cualquier proyecto inicial.

La aplicación se creo con la finalidad de brindar una pequeña introducción a los fundamentos de Ionic, tales como:
* Navegación entre vistas
* Creación de páginas
* Uso de ionic CLI
* Implementación de funcionalidades nativas del móvil
* Implementación de librerías de terceros
* Ciclo de vida de una página
* Envío de parámetros entre vistas
* Uso de UI Components

<h2 id="id2">Estructura de un proyecto en ionic</h2>
Al momento de crear un proyecto en ionic, este genera de manera automática una estructura ordenada para el desarrollo de la aplicación.
Un proyecto en desarrollo se ve de la siguiente manera:


![Ionic Project](http://ionictuts.com/wp-content/uploads/2016/12/ionic-project-structure.jpg)

En donde los más resaltantes son:
* **app:** Se encuentra la raíz de nuestro proyecto, así como la configuración de nuestros componentes.
* **resources:** Así como su nombre lo indica, podemos encontrar los diversos recursos para cada plataforma (ios, android)
* **pages:** Aquí se encuentran todas nuestras páginas creadas. Cada página representa un vista en nuestra app.
* **theme:** Encontramos el archivo `variables.scss` en donde configuraremos nuestros propios estilos.
* **www:** Esta carpeta se crea al momento de ejecutar el comando `ionic serve` y nos permite ver el funcionamiento de la app en el navegador
* **plugins:** Se instalan nuestras librerías, tanto de ionic como de terceros, que extederán la funcionalidad de nuestra aplicación.



