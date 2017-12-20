import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContentChangeService} from './service/content-change.service';
import {FormControl} from '@angular/forms';
import {User} from './model/user-model';
import {ContentInfoService} from './service/content-info.service';

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
  // _dataSet = [];
  _indeterminate = false;
  tableLoading = true;
  pagenum = 10;
  _dataSet =[];

  isVisible = false;
  isConfirmLoading = false;

  // private userinfoArray: FormControl = new FormControl();

  _displayDataChange($event) {
    console.log($event);
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

  constructor(public router: Router, public activeRoute: ActivatedRoute, private contentchangeService: ContentChangeService, private contentservice: ContentInfoService) { }

  ngOnInit() {

    // this._dataSet = this.contentService.getinfos();
    // this.contentService.userinfos.subscribe(success => this.userinfoArray = success);

    this._columnData = ["Uid", "标题", "内容", "作者", "操作"];

    this.activeRoute.params.subscribe(() => this.loadData());
  }

  log(e) {
    console.log('click dropdown button');
  }

  public loadData(){
    // this.contentservice.getUserList();
    this.contentservice.getUserList().subscribe(
      res => {
        this._dataSet = res;
        this.tableLoading = false;
      },
      error =>{console.log(error)},
      ()=>{}
    );
  }

  edit(data:any) {
    this.isVisible = true;
    // console.log(data);
    // this.router.navigateByUrl('/content/' + data.uid)
  }

  handleOk = (e) => {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel = (e) => {
    this.isVisible = false;
  }
}


