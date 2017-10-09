# Pruebas de concepto en Ionic

**INDICE**
1. [Sobre este repositorio](#id1)
2. [Estructura de un proyecto en ionic](#id2)
3. [Ciclo de vida de un componente en ionic](#id3)
4. [Ionic CLI](#id4)
5. [Diseño de una página](#id5)
6. [Manejo de widgets](#id6)
  * [Toast](#toast)
  * [Alerts](#alerts)
7. [Manejo del theme](#id7)
8. [Recursos nativo](#id8)
9. [Librerías de terceros](#id9)


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


<h2 id="id3">Ciclo de vida de un componente en ionic</h2>
En la aplicación hay una sección que lista todos los ciclos de vida de un componente o page, además brinda una breve descripción de cada uno.
Cabe resaltar que el número de métodos que conforman el ciclo de vida es 8 y no 9 ya que a veces se considera el método constructor() pero este
es propio de una clase javascript, estándar ES6, y no de Ionic.

Para un mayor detalle de los ciclos de vida puede revisar la documentación de Ionic o este [LINK](https://www.ion-book.com/blog/tips/lifecycle-ionic/) en el que se explica con más detalle.


<h2 id="id4">Ionic CLI</h2>
Así como angular tiene su propio CLI (Command Line Interface), de la misma forma lo posee Ionic, este CLI nos ayuda de gran manera en la construcción
de paginas, servicios, proyectos, compilación; es decir, será nuestra principal herramienta al momento de interactuar con la creación de nuestra aplicación.

Por ejemplo:
- Crear un proyecto: `ionic start myBeautifulProject`
- Iniciar un servidor local para ver nuestra app en el browser: `ionic serve`
- Crear una nueva página: `ionic generate page myPage`
- Compilar el proyecto para la plataforma android: `ionic cordova build android`
- Compilar el proyecto para la plataforma iOS: `ionic cordova build ios`

Para un mayor detalle del CLI y sus funcionalidades, puede visitar este [LINK](https://ionicframework.com/docs/cli/).


<h2 id="id5">Diseño de una página</h2>
En angular podemos dividir la construcción de un proyecto en componentes, Ionic no es distinto pero usamos `page` en lugar de `component`; es decir,
una página es la representación de una vista o pantalla en nuestra aplicación, con lo cual, en el contexto de Ionic, un página es un componente
que actúa como una vista completa.

Al momento de crear una página, el CLI añade una carpeta al folder `pages` en la cual incluye 4 archivos `.html`, `.ts`, `.scss` y `module.ts` de los cuales
se usan con mayor frecuencia los 3 primeros. Esta página representará una instancia de la vista que deseemos mostrar (about, usuarioInfo, login, etc).
Con respecto al diseño de la página, el archivo .scss añade los estilos personalizados para este componente (o mejor llamado page). Cabe resaltar que
Ionic trae sus propios estilos por default, tanto para android como para ios, los cuales pueden reescribirse sin problemas.


<h2 id="id6">Manejo de widgets</h2>
Como se mencionó anteriormente, Ionic cuenta con sus propios estilos por defecto y además cuenta con una extensa librería de componentes UI.

La [documentación](https://ionicframework.com/docs/components/) de Ionic es la mejor fuente de conocimiento con respecto a este tema ya que se encuentra
detallado con exactitud cada componente, con ejemplos de implementación y la opción de revisar el código fuente.

<h3 id="toast">Toast</h3>
Los toast son como dialogos y nos brinda una interacción más estrecha con el usuario y Ionic lo incluye en su librería de componentes UI, así como
un ejemplo de uso muy didáctico:

```javascript
import { ToastController } from 'ionic-angular';

export class MyPage {
  constructor(public toastCtrl: ToastController) {
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }
}
```
Luego sólo nos quedaría incluir nuestro método en el html.

```html
<button (click)="presentToast()">Mostrar toast</button>
```


<h3 id="alerts">Alerts</h3>




