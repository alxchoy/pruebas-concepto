import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WidgetsPage } from './widgets';

@NgModule({
  declarations: [
    WidgetsPage,
  ],
  imports: [
    IonicPageModule.forChild(WidgetsPage),
  ],
})
export class WidgetsPageModule {}
