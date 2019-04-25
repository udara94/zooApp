import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {BearPage} from '../bear/bear';
import {LionPage} from '../lion/lion';
import {GiraffePage} from '../giraffe/giraffe';
import {GoosePage} from '../goose/goose';
import {SouvernierPage} from '../souvernier/souvernier';
import {CafePage} from '../cafe/cafe';
import {CrocodilePage} from '../crocodile/crocodile';
import {PythonPage} from '../python/python';
import { BirdsPage } from '../birds/birds';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }
  viewBear(){
    this.navCtrl.push(BearPage);
  }
  viewLion(){
    this.navCtrl.push(LionPage);
  }
  ViewGiraffe(){
    this.navCtrl.push(GiraffePage);
  }
  viewBirds(){
    this.navCtrl.push(GoosePage);
  }
  viewSuvernier(){
    this.navCtrl.push(SouvernierPage);
  }
  viewCafe(){
    this.navCtrl.push(CafePage);
  }
  viewCrocodile(){
    this.navCtrl.push(CrocodilePage);
  }
  viewPython(){
    this.navCtrl.push(PythonPage);
  }
}
