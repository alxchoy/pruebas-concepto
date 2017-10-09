import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WidgetsPage } from '../pages/widgets/widgets';
import { ModalPage } from '../pages/modal/modal';
import { LifecyclePage } from '../pages/lifecycle/lifecycle';
import { ThemePage } from '../pages/theme/theme';
import { CameraPage } from '../pages/camera/camera';
import { MapPage } from '../pages/map/map';

// Native
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Camera } from '@ionic-native/camera';

// Terceros
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WidgetsPage,
    ModalPage,
    LifecyclePage,
    ThemePage,
    CameraPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDgbb9NL8pOHjtB253LT3t2MZWrS5pszIc'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WidgetsPage,
    ModalPage,
    LifecyclePage,
    ThemePage,
    CameraPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
