import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user-model';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContentInfoService {

  public UserListURL = 'http://localhost:81/api/userinfo'

  constructor(public http: Http) { }

  public getUserList():Observable<any>{
    console.log('来了');
    // TODO 查询HttpClient
    return this.http.post('http://localhost:81/api/infos',null).map(res => res.json());
      // .subscribe(ress => console.log(ress));
  }
// .map((res: Response) => {
//   let result = res.json();
//   return result;
//   // return result;
// })
}
