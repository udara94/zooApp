import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {ViewMammalPage} from '../view-mammal/view-mammal';
import {LionPage} from '../lion/lion';
import {PandaPage} from '../panda/panda';
import {BearPage} from '../bear/bear';
import {ElephantPage} from '../elephant/elephant';
import {GiraffePage} from '../giraffe/giraffe';

import {MammalProvider} from '../../providers/mammal/mammal';
/**
 * Generated class for the MammalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-mammals',
  templateUrl: 'mammals.html',
})
export class MammalsPage {

  public allMammals=[];
  public lionName="Lion"
  public lionImage="../assets/imgs/lion/lion2.jpg";

  constructor(private MammalProvider:MammalProvider, private http:Http,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MammalsPage');
    this.MammalProvider.getMammals()
    .subscribe((response)=>{
      this.allMammals= response;
   //   console.log(this.allMammals)
    });
 
  }

  viewLion(){
    this.navCtrl.push(LionPage)
  }
  viewPanda(){
    this.navCtrl.push(PandaPage)
  
  }
  viewBear(){
    this.navCtrl.push(BearPage)
  }
  viewElephant(){
    this.navCtrl.push(ElephantPage)
  }
  viewGiraffe(){
    this.navCtrl.push(GiraffePage)
  }

}
