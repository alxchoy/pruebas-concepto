import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-lifecycle',
  templateUrl: 'lifecycle.html',
})
export class LifecyclePage {

  itemSelected: Object;
  lyfecycleMethods: Object[] = [
    {
      method: 'ionViewCanEnter',
      description: 'Es un guard de navegación que revisa si podemos navegar a otra página o tenemos los permisos para seguir con la navegación'
    },
    {
      method: 'ionViewDidLoad',
      description: 'Este método se ejecuta una vez que la página ha sido cargada completamente, así como las variables y dependencias inyectadas'
    },
    {
      method: 'ionViewWillEnter',
      description: 'Se ejecuta cada vez que la página se ha cargado y está a punto de convertirse en la página activa'
    },
    {
      method: 'ionViewDidEnter',
      description: 'La página ha entrado o cargado completamente y además es la página activa'
    },
    {
      method: 'ionViewCanLeave',
      description: 'Es un guard de navegación que revisa si podemos o tenemos los permisos para salir de la página actual'
    },
    {
      method: 'ionViewWillLeave',
      description: 'Se ejecuta cuando la página está a punto de dejar de ser la página activa o volverse inactiva'
    },
    {
      method: 'ionViewDidLeave',
      description: 'Se ejecuta cuando la página ha salido completamente y ya no es la página activa'
    },
    {
      method: 'ionViewWillUnload',
      description: 'Se ejecuta cuando la página está siendo destruida, útil para liberar recursos que ya no son necesarios'
    },
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemSelected = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LifecyclePage');
  }

}
