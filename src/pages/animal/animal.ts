import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {MammalsPage} from '../mammals/mammals';
import {ReptilesPage} from '../reptiles/reptiles';
import {BirdsPage} from '../birds/birds';
/**
 * Generated class for the AnimalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-animal',
  templateUrl: 'animal.html',
})
export class AnimalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnimalPage');
  }
  mammals(){
    this.navCtrl.push(MammalsPage);
  }
  birds(){
    this.navCtrl.push(BirdsPage);
  }
  reptile(){
    this.navCtrl.push(ReptilesPage);
  }
}
