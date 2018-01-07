import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContentFromComponent} from './content-from/content-from.component';
import {ChangeFormComponent} from './content-from/change-form/change-form.component';
import {HomeComponent} from './home/home.component';
import {loginGuard} from './guard/login.guard';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login' ,component: LoginComponent},
  {path: 'home', component: HomeComponent,canActivate:[loginGuard]},
  {path: 'content', component: ContentFromComponent},
  {path: 'content/:id', component: ChangeFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],//一定要导出
  declarations: []
})

export class RoutesModule {}
