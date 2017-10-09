import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-theme',
  templateUrl: 'theme.html',
})
export class ThemePage {

  itemSelected: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.itemSelected = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThemePage');
  }

  setAlignCenter(el) {
    el.setAttribute('text-center', true);
    el.removeAttribute('text-left');
    el.removeAttribute('text-right');
  }

  setAlignLeft(el) {
    el.setAttribute('text-left', true);
    el.removeAttribute('text-center');
    el.removeAttribute('text-right');
  }

  setAlignRight(el) {
    el.setAttribute('text-right', true);
    el.removeAttribute('text-center');
    el.removeAttribute('text-left');
  }

}
