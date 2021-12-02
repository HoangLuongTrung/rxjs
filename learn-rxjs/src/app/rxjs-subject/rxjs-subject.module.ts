import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsSubjectComponent } from './rxjs-subject.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RxjsSubjectComponent
  }
];


@NgModule({
  declarations: [
    RxjsSubjectComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RxjsSubjectModule { }
