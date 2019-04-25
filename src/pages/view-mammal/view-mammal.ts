import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewMammalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-view-mammal',
  templateUrl: 'view-mammal.html',
})
export class ViewMammalPage {

  public data=[];
public  lionName:any;
public lionImage:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewMammalPage');
    this.lionName = this.navParams.get('lionName');
    this.lionImage = this.navParams.get('lionImage');
   
    console.log(this.lionName);
  }

}
