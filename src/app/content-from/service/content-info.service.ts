import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user-model';
import {Http} from '@angular/http';

@Injectable()
export class ContentInfoService {

  public UserListURL = 'http://localhost:81/api/userinfo'

  constructor(public http: Http) { }

  public getUserList():Observable<User[]>{
    console.log('来了');
    // return
    return this.http.post('http://localhost:81/api/userinfo',{}).map((res: Response) => {
      let result = res.json()
      return result;
    });
      // .subscribe(ress => console.log(ress));
  }
// .map((res: Response) => {
//   let result = res.json();
//   return result;
//   // return result;
// })
}
