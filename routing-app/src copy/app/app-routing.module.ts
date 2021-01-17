import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';

//주소에 해당하는 컴포넌트 등록(routing)
     // ↓얘한테 주소를 등록하면 됨
const routes: Routes = [
{path:'first-component', component:FirstComponent}, //주소지정, 컴포넌트 지정
{path:'second-component', component:SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
