import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class ContentChangeService {

  constructor(private http: HttpClient) { }

  getinfo(uid: string):Observable<any> {
      this.http.post('')
  }

}


