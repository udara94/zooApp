import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AnimalPage} from '../animal/animal'
import {MapPage} from '../map/map';
import {CafePage} from '../cafe/cafe';
import {PhotoPage} from '../photo/photo';
import {ShopPage} from '../shop/shop';

import { Camera, CameraOptions } from '@ionic-native/camera';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  captureDataUrl: string="";
  URL: string="";

  constructor(public navCtrl: NavController,private camera: Camera) {

  }
  viewAnimals(){
    this.navCtrl.push(AnimalPage);
  }
  viewMap(){
    this.navCtrl.push(MapPage);
  }
  viewShop(){
    this.navCtrl.push(ShopPage);
  }
 
 

  capture() {
    //setup camera options
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE

    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.captureDataUrl = 'data:image/jpeg;base64,' + imageData;
      this.URL = this.captureDataUrl;
      var photo=this.URL
      this.navCtrl.push(PhotoPage,{photo});
    }, (err) => {
      console.log("ERROR -> " + JSON.stringify(err));
    });

  }
}
