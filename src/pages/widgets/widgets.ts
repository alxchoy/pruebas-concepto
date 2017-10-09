import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController, ModalController } from 'ionic-angular';

// Page
import { ModalPage } from '../modal/modal';

// Native
import { InAppBrowser } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-widgets',
  templateUrl: 'widgets.html',
})
export class WidgetsPage {

  itemSelected: object;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    private iab: InAppBrowser
  ) {
    this.itemSelected = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WidgetsPage');
  }

  showToast() {
    const toast = this.toastCtrl.create({
      message: 'Se ha enviado la contraseña a su correo, por favor revíselo',
      position: 'middle',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });  

    toast.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error en el servicio',
      subTitle: 'Hemos tenido un error en el proceso, por favor vuelve a realizar la acción anterior',
      buttons: ['OK']
    });
    alert.present();
  }

  showModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

  showAllWidgets() {
    this.iab.create('https://ionicframework.com/docs/components/', "_system");
  }

}
