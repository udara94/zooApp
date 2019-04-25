//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the MammalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MammalProvider {

  constructor(public http: Http) {
    console.log('Hello MammalProvider Provider');
  }
  getMammals(){
    return this.http.get('/assets/mammals.json')
    .map(response =>response.json())
  }

}
