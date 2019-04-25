import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the BirdProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BirdProvider {

  constructor(public http: Http) {
    console.log('Hello BirdProvider Provider');
  }

  getbirds(){
    return this.http.get('/assets/birds.json')
    .map(response =>response.json())
  }
}
