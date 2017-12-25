import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { SiderComponent } from './sider/sider.component';
import { ContentFromComponent } from './content-from/content-from.component';
import {Router} from '@angular/router';
import {RoutesModule} from './routes.module';
import { ChangeFormComponent } from './content-from/change-form/change-form.component';
import { ContentChangeService } from './content-from/service/content-change.service';
import {HttpClientModule} from '@angular/common/http';
import {ContentInfoService} from './content-from/service/content-info.service';
import {environment} from '../environments/environment';
import { LoginComponent } from './login/login.component';

const API_URL = environment.apiUrl;

// const routeConfig: Router = [
//   {path: '', component: ContentFromComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    SiderComponent,
    ContentFromComponent,
    ChangeFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RoutesModule,
  ],
  bootstrap: [AppComponent],
  providers: [ContentChangeService, ContentInfoService]
})
export class AppModule { }
