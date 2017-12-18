import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContentChangeService, UserInfo} from './service/content-change.service';

@Component({
  selector: 'app-content-from',
  templateUrl: './content-from.component.html',
  styleUrls: ['./content-from.component.css']
})
export class ContentFromComponent implements OnInit {

  _allChecked = false;
  _disabledButton = true;
  _checkedNumber = 0;
  _displayData: Array<any> = [];
  _operating = false;
  _dataSet = [];
  _indeterminate = false;

  _displayDataChange($event) {
    this._displayData = $event;
  };

  _refreshStatus() {
    const allChecked = this._displayData.every(value => value.checked === true);
    const allUnChecked = this._displayData.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
    this._disabledButton = !this._dataSet.some(value => value.checked);
    this._checkedNumber = this._dataSet.filter(value => value.checked).length;
  };

  _checkAll(value) {
    if (value) {
      this._displayData.forEach(data => data.checked = true);
    } else {
      this._displayData.forEach(data => data.checked = false);
    }
    this._refreshStatus();
  };

  _operateData() {
    this._operating = true;
    setTimeout(_ => {
      this._dataSet.forEach(value => value.checked = false);
      this._refreshStatus();
      this._operating = false;
    }, 1000);
  };

  _columnData: Array<string>;

  constructor(public router: Router, private contentService: ContentChangeService) { }

  ngOnInit() {

    this._dataSet = this.contentService.getinfos();

    this._columnData = ["Uid", "实名认证", "手机号", "昵称", "状态", "是否为代理商", "用户角色", "注册时间", "操作"];

    console.log(this._dataSet);
  }

  log(e) {
    console.log('click dropdown button');
  }

  edit(data: UserInfo) {
    this.router.navigateByUrl('/content/' + data.uid)
  }

}


