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

  _id: string;

  _data: any;

  uid: Subject<string>;
  content: string;
  author: string;

  renderData: any;

  validateForm: FormGroup;
  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsDirty();
    }
    this.subject.next(value);
  };

  resetForm($event: MouseEvent) {
    $event.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
    }
  }


  constructor(private modalService: NzModalService,
              private router: ActivatedRoute,
              private fb: FormBuilder,
              private infoService: ContentChangeService,
              private message: NzMessageService,
              private subject: NzModalSubject) {

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

  submint() {
    this.message.create('warning', 'feifashuju');
  }

}
