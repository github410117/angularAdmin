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

// const routeConfig: Router = [
//   {path: '', component: ContentFromComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    SiderComponent,
    ContentFromComponent,
    ChangeFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    RoutesModule,
  ],
  bootstrap: [AppComponent],
  providers: [ContentChangeService]
})
export class AppModule { }
