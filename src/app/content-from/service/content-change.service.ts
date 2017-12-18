import { Injectable } from '@angular/core';
import {create} from 'domain';

@Injectable()
export class ContentChangeService {

  constructor() { }

  private userinfos = [];

  getinfos(): UserInfo[] {
    this.creat();
    return this.userinfos;
  }

  getinfo(uid: string): UserInfo {
    this.creat();
    return this.userinfos.find(info => info.uid == uid);
  }


  creat() {
    if (this.userinfos.length !== 0) {
      this.userinfos = [];
    }
    for (let i = 0; i < 46; i++) {
      let userinfo = new UserInfo(i, `${i}`,`谢航${i}`, `110${i}`,`昵称${i}`, Math.random() > 0.5 ? "使用中" : "禁止", Math.random() > 0.5 ? "是" : "否", Math.random() > 0.5 ? "普通用户" : "金牌用户", "2018-12-02");
      this.userinfos.push(userinfo);
      // this._dataSet.push({
      //   key    : i,
      //   uid   : `${i}`,
      //   realName : `谢航${i}`,
      //   phone  : `1811340048${i}`,
      //   nickName : `哈哈昵称${i}`,
      //   state: Math.random() > 0.5 ? "使用中" : "禁止",
      //   isProxy: Math.random() > 0.5 ? "是" : "否",
      //   role : Math.random() > 0.5 ? "普通用户" : "金牌用户",
      //   registerTime : "2018-12-02"
      // });
  }


}

}

export class UserInfo {
  constructor(public key: number,
              public uid: string,
              public realName: string,
              public phone: string,
              public nickName: string,
              public state: string,
              public isProxy: string,
              public role: string,
              public registerTime: string
  ){

  }
}
