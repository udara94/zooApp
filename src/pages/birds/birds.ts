import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {ParrotPage} from '../parrot/parrot';
import {OwlPage} from '../owl/owl';
import {PenguinPage} from '../penguin/penguin';
import {ToucanPage} from '../toucan/toucan';
import {GoosePage} from '../goose/goose';

import {BirdProvider} from '../../providers/bird/bird';
import {ViewBirdsPage} from '../view-birds/view-birds';
/**
 * Generated class for the BirdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-birds',
  templateUrl: 'birds.html',
})
export class BirdsPage {

  public allBirds=[];

  constructor(private birdProvider:BirdProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BirdsPage');
    this.birdProvider.getbirds()
    .subscribe((response)=>{
      this.allBirds=response;
    });
  }

  viewParrot(){
  this.navCtrl.push(ParrotPage);
  }
  viewOwl(){
this.navCtrl.push(OwlPage);
  }
  viewToucan(){
    this.navCtrl.push(ToucanPage);
  }
  viewPenguin(){
    this.navCtrl.push(PenguinPage);
  }
  viewGoose(){
    this.navCtrl.push(GoosePage);
  }

}
