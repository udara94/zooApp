import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {CafePage} from '../cafe/cafe';
import {SouvernierPage} from '../souvernier/souvernier';

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})
export class ShopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }
  viewCafe(){
    this.navCtrl.push(CafePage);
  }
  viewSouvernier(){
    this.navCtrl.push(SouvernierPage);
  }


}
