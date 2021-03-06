import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContentChangeService} from './service/content-change.service';
import {FormControl} from '@angular/forms';
import {User} from './model/user-model';
import {ContentInfoService} from './service/content-info.service';
import {NzMessageService, NzModalService} from 'ng-zorro-antd';
import {ChangeFormComponent} from './change-form/change-form.component';
import {isObject} from 'util';

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
  _dataSet = [];

  dataTotal: number;

  isVisible = false;
  isConfirmLoading = false;

  // private userinfoArray: FormControl = new FormControl();

  _displayDataChange($event) {
    this._displayData = $event;
  };

  _refreshStatus() {
    alert('刷新了');
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

  constructor(
    private modalService: NzModalService,
    public router: Router,
    public activeRoute: ActivatedRoute,
    private contentchangeService: ContentChangeService,
    private contentservice: ContentInfoService,
    private message: NzMessageService,
  ) {
  }

  ngOnInit() {

    // this._dataSet = this.contentService.getinfos();
    // this.contentService.userinfos.subscribe(success => this.userinfoArray = success);

    this._columnData = ['Uid', '标题', '内容', '作者', '操作'];

    this.activeRoute.params.subscribe(() => this.loadData());
  }

  log(e) {
    console.log('click dropdown button');
  }

  public loadData() {
    // this.contentservice.getUserList();
    this.contentservice.getUserList().subscribe(
      res => {
        this._dataSet = res.data;
        this.tableLoading = false;
        this.dataTotal = res.total;
      },
      error => {
        console.log(error);
      },
      () => {
      }
    );
  }

  edit(data: any) {
    let that = this;
    this.tableLoading = true;
    this.contentchangeService.getinfo(data.id).subscribe(res => {
        this.tableLoading = false;
        const subscription = this.modalService.open({
          title: '编辑',
          content: ChangeFormComponent,
          onOk() {
            that.loadData();
          },
          onCancel() {
            console.log('Click cancel');
          },
          footer: false,
          componentParams: {
            data: res
          }
        });

      // subscription.subscribe(result => {
      //   if (!isObject(result)){return;}
      //
      //   this.contentchangeService.updateinfo(result['Uid'], result).subscribe(res => {
      //       if (res != '1') {
      //         this.message.create('error','错误了');
      //       }else {
      //         subscription.destroy('onOk');
      //         this.message.create('success','修改成功');
      //         this.loadData();
      //       }
      //
      //   });
      // });
    })

  }


}


