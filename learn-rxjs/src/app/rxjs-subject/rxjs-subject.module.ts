import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxjsSubjectComponent } from './rxjs-subject.component';
import { RouterModule, Routes } from '@angular/router';
import { ItemUnitModule } from '../components/item-unit/item-unit.module';

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
    RouterModule.forChild(routes),
    ItemUnitModule
  ]
})
export class RxjsSubjectModule { }
