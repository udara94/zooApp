import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {ViewReptilePage} from '../view-reptile/view-reptile';
import {ReptileProvider} from '../../providers/reptile/reptile'; 
import {TurtlePage} from '../turtle/turtle';
import {CrocodilePage} from '../crocodile/crocodile';
import {PythonPage} from '../python/python';
import {TortoisePage} from '../tortoise/tortoise';
import {SnakePage} from '../snake/snake';
/**
 * Generated class for the ReptilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-reptiles',
  templateUrl: 'reptiles.html',
})
export class ReptilesPage {

  public allReptile=[];
  constructor(public ReptileProvider:ReptileProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReptilesPage');
    this.ReptileProvider.getReptiles()
    .subscribe((response)=>{
      this.allReptile= response;
  });
}
viewTurtle(){
this.navCtrl.push(TurtlePage);
}
viewCrocodile(){
  this.navCtrl.push(CrocodilePage);
}
viewPython(){
  this.navCtrl.push(PythonPage);
}
viewTortoise(){
  this.navCtrl.push(TortoisePage);
}
viewSnakes(){
  this.navCtrl.push(SnakePage);
}

}




