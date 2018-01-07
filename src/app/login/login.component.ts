import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ApiCoreServiceService} from '../core-service/api-core-service.service';
import {NzMessageService} from 'ng-zorro-antd';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  validateForm: FormGroup;

  isloading;

  constructor(private fb: FormBuilder,
              private service: ApiCoreServiceService,
              private message: NzMessageService,
              private router: Router) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  _submitForm(value) {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
    }
    if (this.validateForm.valid == false) return;
    delete value.remember;


    this.isloading = true;
    this.service.netTool(this.service.API.login, value).subscribe(
      result => {
        this.isloading = false;
        localStorage.setItem('userInfo',JSON.stringify(result.userinfo));
        localStorage.setItem('token',result.accessToken);
        this.router.navigate(['home']);
      },
      b => {
        console.log(b);
        this.isloading = false;
      },
    );

  }


}
