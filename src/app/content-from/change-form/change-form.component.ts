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
    console.log(value);
  };

  resetForm($event: MouseEvent) {
    $event.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[key].markAsPristine();
    }
  }


  constructor(private modalService: NzModalService, private router: ActivatedRoute, private fb: FormBuilder, private infoService: ContentChangeService,private message:NzMessageService) {

  }

  @Input()
  set id(value: string) {
    this._id = value;
  }


  ngOnInit() {


    this.validateForm = this.fb.group({
      Uid: [this.content, [Validators.required]],
      Title: ['', [Validators.required]],
      Content: ['', [Validators.required]],
      Author: ['', [Validators.required]],
    });
    this.uid.subscribe(re => this.content = re);
    this.infoService.getinfo(this._id).subscribe(res => {
      this.renderData = res;
    this.uid = res.id;
      // this.content = res.content;
      // this.author = res.
    });

  }

  submint(){
    this.message.create("warning","feifashuju")
  }

}
