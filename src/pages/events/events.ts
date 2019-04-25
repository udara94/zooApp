import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import {DolphinePage} from '../dolphine/dolphine';
import {BirdShowPage} from '../bird-show/bird-show';
import {SnakeShowPage} from '../snake-show/snake-show';
import {BabyCarePage} from '../baby-care/baby-care';
import {CrocodileAdventurePage} from '../crocodile-adventure/crocodile-adventure';
/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }
  viewDolphine(){
this.navCtrl.push(DolphinePage);
  }
  viewBirdShow(){
this.navCtrl.push(BirdShowPage);
  }
  viewSnakeShow(){
this.navCtrl.push(SnakeShowPage);
  }
  viewBaby(){
this.navCtrl.push(BabyCarePage);
  }
  viewCrocadile(){
    this.navCtrl.push(CrocodileAdventurePage);
  }
}
