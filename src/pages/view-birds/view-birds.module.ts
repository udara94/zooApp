import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewBirdsPage } from './view-birds';

@NgModule({
  declarations: [
    ViewBirdsPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewBirdsPage),
  ],
})
export class ViewBirdsPageModule {}
