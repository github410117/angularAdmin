import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {observable} from 'rxjs/symbol/observable';
@Injectable()
export class ContentChangeService {

  constructor(private http: HttpClient) { }

  getinfo(uid: string):Observable<any> {
    this.http.get('http://localhost:81/api/infos/' + uid).subscribe(res => console.log(res));
    return Observable.from('1234');
  }

}


