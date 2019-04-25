import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the ReptileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReptileProvider {

  constructor(public http: Http) {
    console.log('Hello ReptileProvider Provider');
  }

  getReptiles(){
    return this.http.get('/assets/reptile.json')
    .map(response =>response.json())
  }


}
