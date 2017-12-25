import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContentChangeService} from '../service/content-change.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {NzMessageService, NzModalService, NzModalSubject} from 'ng-zorro-antd';
import {Subject} from 'rxjs/Subject';
import {VariableAst} from '@angular/compiler';

@Component({
  selector: 'app-change-form',
  templateUrl: './change-form.component.html',
  styleUrls: ['./change-form.component.css']
})
export class ChangeFormComponent implements OnInit {

  _data: any;

  content: string;
  author: string;


  validateForm: FormGroup;

  sendLoading: boolean = false;


  constructor(private modalService: NzModalService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private infoService: ContentChangeService,
              private message: NzMessageService,
              private subject: NzModalSubject,
              private changeService: ContentChangeService,
              ) {

  }

  @Input()
  set data(value: string) {
    this._data = value;
  }


  ngOnInit() {
    this.validateForm = this.fb.group({
      Uid: [this._data.id, [Validators.required]],
      Title: [this._data.title, [Validators.required]],
      Content: [this._data.content, [Validators.required]],
      Author: [this._data.author, [Validators.required]],
    });


  }


  submitForm(value) {
    // $event.preventDefault();
    // for (const key in this.validateForm.controls) {
    //   this.validateForm.controls[key].markAsDirty();
    // }
    // this.subject.next(value);

    this.sendLoading = true;
    this.changeService.updateinfo(value.Uid, value).subscribe(res => {
      this.sendLoading = false;
      if (res !== '1') {
        this.message.create('success','修改成功');
        this.subject.destroy('onOk')
      }else {
        this.message.create('error','修改失败');
      }
    });
  };

  resetForm($event: MouseEvent) {
    $event.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
    }
  }

}
