import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Pages
import { WidgetsPage } from '../widgets/widgets';
import { LifecyclePage } from '../lifecycle/lifecycle';
import { ThemePage } from '../theme/theme';
import { CameraPage } from '../camera/camera';
import { MapPage } from '../map/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  funtionalityList: Object[] = [
    {
      title: 'Ciclo de vida',
      description: 'El ciclo de vida de una aplicación en ionic.'
    },
    {
      title: 'Widgets',
      description: 'Ionic maneja sus propios widgets, los cuales abarcan muchas funcionalidades.'
    },
    {
      title: 'Theme',
      description: 'Ionic tiene su propio theme por default; sin embargo, podemos cambiarlo a nuestro gusto.'
    },
    {
      title: 'Cámara',
      description: 'Funcionens nativas de cámara.'
    },
    {
      title: 'Mapas',
      description: 'Funciones nativa del mapa.'
    },
    {
      title: 'Firebase',
      description: 'Conexión con base de datos en tiempo real como Firebase.'
    }
  ];

  constructor(public navCtrl: NavController) {
    
  }

  itemSelected(item: number) {
    let functionalityPage: any = this.funtionalityList[item];

    switch (functionalityPage.title) {
      case 'Ciclo de vida':
        this.navCtrl.push(LifecyclePage, {item: functionalityPage});
        break;
      case 'Widgets':
        this.navCtrl.push(WidgetsPage, {item: functionalityPage});
        break;
      case 'Theme':
        this.navCtrl.push(ThemePage, {item: functionalityPage});
        break;
      case 'Cámara':
        this.navCtrl.push(CameraPage, {item: functionalityPage});
        break;
      case 'Mapas':
        this.navCtrl.push(MapPage, {item: functionalityPage});
        break;
      case 'Firebase':
        console.log("firebase");
        break;
      default:
        console.log("default");
    }
  }

}
