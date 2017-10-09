import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  
  itemSelected: Object;
  lat: number;
  lng: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemSelected = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    navigator.geolocation.getCurrentPosition( (position) => {
      this.lat = position.coords.latitude;
      this.lng = position.coords.longitude;
    }, (err) => {
      console.log(err)
    })
  }

}
