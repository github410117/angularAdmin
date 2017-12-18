import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ContentFromComponent} from './content-from/content-from.component';
import {ChangeFormComponent} from './content-from/change-form/change-form.component';

const routes: Routes = [
  {path: 'content', component: ContentFromComponent, pathMatch: 'full'},
  {path: 'content/:id', component: ChangeFormComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})//暂时不知这个useHash是干嘛的
  ],
  exports: [RouterModule],//一定要导出
  declarations: []
})

export class RoutesModule {}
