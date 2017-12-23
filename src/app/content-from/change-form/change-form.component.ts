import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ContentChangeService} from '../service/content-change.service';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-change-form',
  templateUrl: './change-form.component.html',
  styleUrls: ['./change-form.component.css']
})
export class ChangeFormComponent implements OnInit {

  info: Object;


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



  userNameAsyncValidator = (control: FormControl): any => {
    return Observable.create(function (observer) {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          observer.next({ error: true, duplicated: true });
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });
  };

  getFormControl(name) {
    return this.validateForm.controls[ name ];
  }




  constructor(public routerInfo: ActivatedRoute, private changeService: ContentChangeService, private fb: FormBuilder) {
    this.validateForm = this.fb.group({
      realName            : [ '', [ Validators.required ] ],
      phone               : [ '', [ Validators.required  ] ],
      nickName            : [ '', [ Validators.required  ] ]
    });
  }

  ngOnInit() {
    let uid = this.routerInfo.snapshot.params['id'];
    this.changeService.getinfo(uid).subscribe(res => {
      this.validateForm = this.fb.group({
        realName            : [ res['title'], [ Validators.required ] ],
        phone               : [ res['content'], [ Validators.required  ] ],
        nickName            : [ res['author'], [ Validators.required  ] ]
      });
    });

    // this.info = this.changeService.getinfo(uid);
    // console.log(this.info);
  }

}
