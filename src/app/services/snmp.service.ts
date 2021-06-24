import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { URL_SERVICIOS } from '../api/api';
import { SNMP } from '../models/snmp.model';

@Injectable({
  providedIn: 'root'
})
export class SnmpService {

  constructor(public http: HttpClient) { }

  getSNMP(model: SNMP) {
    let url = URL_SERVICIOS + `/api/snmpGET`;
    return this.http.post(url, model/*, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    }*/).map( (resp: any) => resp
         ).catch(err => {
           console.log(err);
              return Observable.throw(err);
            });
  }

  getNextSNMP(model: SNMP) {
    let url = URL_SERVICIOS + `/api/snmpGETNext`;
    return this.http.post(url, model/*, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    }*/).map( (resp: any) => resp).catch(err => {
      console.log(err);
              return Observable.throw(err);
            });
  }

  setSNMP(model: SNMP) {
    let url = URL_SERVICIOS + `/api/snmpSET`;
    return this.http.post(url, model/*, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    }*/).map( (resp: any) => resp ).catch(err => {
      console.log(err);
              return Observable.throw(err);
            });
  }
}
