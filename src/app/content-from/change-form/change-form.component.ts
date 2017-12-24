import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContentChangeService} from '../service/content-change.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import {NzModalService, NzModalSubject} from 'ng-zorro-antd';
import {Subject} from 'rxjs/Subject';

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

  renderData:any ={}

  validateForm: FormGroup;
  submitForm = ($event, value) => {
    $event.preventDefault();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsDirty();
    }
    console.log(value);
  };

  resetForm($event: MouseEvent) {
    $event.preventDefault();
    this.validateForm.reset();
    for (const key in this.validateForm.controls) {
      this.validateForm.controls[ key ].markAsPristine();
    }
  }



  constructor(private modalService: NzModalService, private router: ActivatedRoute , private fb: FormBuilder, private infoService: ContentChangeService) {

  }

  @Input()
  set id(value: string) {
    this._id = value;
  }


  ngOnInit() {

    this.validateForm = this.fb.group({
      Uid                  : [ this.uid, [ Validators.required ] ],
      Title                : [ this.renderData.title, [ Validators.required ] ],
      Content              : [ this.renderData.content, [ Validators.required ] ],
      Author               : [ this.renderData.author, [ Validators.required ] ],
    });
    this.infoService.getinfo(this._id).subscribe(res => {
      this.renderData = res;
      this.validateForm.setValue({
        Content:"12315"
      },{})
      this.uid = res.id;
        // this.content = res.content;
        // this.author = res.
    });

  }



}
