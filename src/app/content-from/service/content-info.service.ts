import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user-model';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ContentInfoService {

  public UserListURL = 'http://localhost:81/api/userinfo'

  constructor(public http: HttpClient) { }

  public getUserList():Observable<any>{
    // TODO 查询HttpClient
    return this.http.get('http://localhost:81/api/infos');
  }

}
