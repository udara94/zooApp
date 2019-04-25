import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewReptilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-view-reptile',
  templateUrl: 'view-reptile.html',
})
export class ViewReptilePage {

  public data=[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewReptilePage');
    this.data = this.navParams.get('mammal');
    console.log(this.data);
  }

}
