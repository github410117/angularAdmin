import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class ApiCoreServiceService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    this.http.post(environment + 'login');
  }

}
