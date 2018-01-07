import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {NzMessageService} from 'ng-zorro-antd';

@Injectable()
export class ApiCoreServiceService {

  constructor(private http: HttpClient,
              private message: NzMessageService) {
  }

  BaseUrl = environment.apiUrl;

  API = {
    login: this.BaseUrl + 'login',
  };

  netTool(url, param): Observable<any> {
    var netRequest: Observable<any>;
    switch (url) {
      case this.API.login:
        netRequest = this.http.post(url, param);
        break;
    }

    return Observable.create(observer => {
      netRequest.subscribe(value => {
        var code = value['code'];
        if (code == 0) {
          observer.next(value['data']);
          observer.complete();
        } else {
          this.message.create('error', value['msg']);
          observer.error(value);
        }
      }, error => {
          observer.error(error);
      });
    });

  }


}
