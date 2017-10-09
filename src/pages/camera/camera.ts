import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Native
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  itemSelected: Object;
  base64Image: String;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera) {
    this.itemSelected = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
  }

  takePicture() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 800,
      correctOrientation: true
    }

    this.camera.getPicture(options).then( (imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    })
  }

}
